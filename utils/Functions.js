/**
 * Extracts and returns float value from a string.
 *
 * @param {string} string String
 * @return {any}
 */
import client from "../components/ApolloClient";
import {GET_CART} from "../components/queries/cart";

export const getFloatVal = ( string ) => {

    let floatValue = string.match( /[+-]?\d+(\.\d+)?/g )[0];
    return ( null !== floatValue ) ? parseFloat( parseFloat( floatValue ).toFixed( 2 ) ) : '';

};


export const addFirstProduct = ( props ) => {
    let productPrice = getFloatVal(props.props.product.price);

    let newCart = {
        products: [],
        totalProductsCount: 1,
        totalProductsPrice: productPrice
    };

    const newProduct = createNewProduct( props.props.product, props.props.product.price, 1 );
    newCart.products.push( newProduct );

    localStorage.setItem( 'woo-next-cart', JSON.stringify( newCart ) );

    return newCart;
};

export const createNewProduct = ( product, productPrice, qty ) => {
    let productImage = product.image.sourceUrl !== null ? product.image.sourceUrl:'#'
    return  {
        id: product.id,
        image: productImage,
        name: product.name,
        price: productPrice,
        qty: qty,
        totalPrice: parseFloat( ( getFloatVal(productPrice) * qty ).toFixed( 2 ) )
    };

};

export const updateCart = async (setCart) => {
    const wooCart = await client.query({query: GET_CART})
    let products = []
    for (let i = 0; i < wooCart.data.cart.contents.edges.length;i++){
        let product = wooCart.data.cart.contents.edges[i]
        product = {
            id:product.node.product.node.id,
            image:product.node.product.node.image.sourceUrl,
            key: product.node.key,
            name:product.node.product.node.name,
            price: product.node.product.node.price,
            qty: product.node.quantity,
            totalPrice: product.node.product.node.total,
        }
        products.push(product)
    }
    const newCart = {
        products: products,
        totalProductsCount: wooCart.data.cart.contents.itemCount,
        totalProductsPrice: wooCart.data.cart.total,
    }
    localStorage.setItem('woo-next-cart', JSON.stringify(newCart))
    setCart(newCart)
    /*const updatedProducts = getUpdatedProducts( existingCart , product, qtyToBeAdded, newQty );
    let totalPrice = 0
    let totalQty = 0
    let totalProducts = updatedProducts.length
    for (let i=0;i<totalProducts;i++) {
        totalPrice = totalPrice += (getFloatVal(updatedProducts[i].price) * updatedProducts[i].qty)
        totalQty = totalQty += updatedProducts[i].qty
    }
    const updatedCart = {
        products: updatedProducts,
        totalProductsCount: totalQty,
        totalProductsPrice: totalPrice
    };
    localStorage.setItem( 'woo-next-cart', JSON.stringify( updatedCart ) );
    return updatedCart;
     */

};

export const getUpdatedProducts = ( existingProductsInCart, product, qtyToBeAdded, newQty = false ) => {
// Check if the product already exits in the cart.
    const productExitsIndex = isProductInCart( existingProductsInCart, product.id );
    //If product exits ( index of that product found in the array ), update the product quantity and totalPrice
    if ( -1 < productExitsIndex) {
        let updatedProducts = existingProductsInCart.products;
        let updatedProduct = updatedProducts[ productExitsIndex ];
        console.warn(updatedProduct)
        // If have new qty of the product available, set that else add the qtyToBeAdded
        updatedProduct.qty = ( newQty ) ? parseInt( qtyToBeAdded ) : parseInt( updatedProduct.qty + qtyToBeAdded );
        updatedProduct.totalPrice = parseFloat( ( getFloatVal(updatedProduct.price) * updatedProduct.qty ).toFixed( 2 ) );
        return  updatedProducts;
    } else {
        // If product not found push the new product to the existing product array.
        let productPrice = product.price;
        const newProduct = createNewProduct( product, productPrice, qtyToBeAdded );
        existingProductsInCart.products.push( newProduct );
        return existingProductsInCart.products;
    }


};


const isProductInCart = ( existingProductsInCart, productId ) => {
    // noinspection JSUnusedLocalSymbols
    const returnItemThatExits = ( item, index ) => {
        if ( productId === item.id ) {
            return item;
        }
    };
    //console.warn(existingProductsInCart.products)
    // This new array will only contain the product which is matched.
    const newArray = existingProductsInCart.products.filter( returnItemThatExits );
    return existingProductsInCart.products.indexOf( newArray[0] );
};
export const removeItemFromCart = ( id ) => {

    let existingCart = localStorage.getItem( 'woo-next-cart' );
    existingCart = JSON.parse( existingCart );

    //if there is one item in the cart delete the cart
    if (1 === existingCart.products.length) {
        localStorage.removeItem('woo-next-cart')
    }
    const productExitsIndex = isProductInCart( existingCart, id );
        if (-1 < productExitsIndex) {
            const productTobeRemoved = existingCart.products[ productExitsIndex ];
            const qtyToBeRemovedFromTotal = productTobeRemoved.qty;
            const priceToBeDeductedFromTotal = productTobeRemoved.totalPrice;

            let updatedCart = existingCart
            updatedCart.products.splice( productExitsIndex, 1 )
            updatedCart.totalProductsCount = existingCart.totalProductsCount - qtyToBeRemovedFromTotal;
            updatedCart.totalProductsPrice = updatedCart.totalProductsPrice - priceToBeDeductedFromTotal;
            localStorage.setItem('woo-next-cart', JSON.stringify(updatedCart))
            return updatedCart
        } else {
            return existingCart
        }
}
//create checkout redirect with stripe
export const getFormattedCart = ( data ) => {

    let formattedCart = null;

    if ( undefined === data || ! data.cart.contents.nodes.length ) {
        return formattedCart;
    }

    const givenProducts = data.cart.contents.nodes;

    // Create an empty object.
    formattedCart = {};
    formattedCart.products = [];
    let totalProductsCount = 0;

    for( let i = 0; i < givenProducts.length; i++  ) {
        const givenProduct = givenProducts?.[ i ]?.product?.node;
        const product = {};
        const total = getFloatVal( givenProducts[ i ].total );

        product.productId = givenProduct?.productId ?? '';
        product.cartKey = givenProducts?.[ i ]?.key ?? '';
        product.name = givenProduct?.name ?? '';
        product.qty = givenProducts?.[ i ]?.quantity;
        product.price = total / product?.qty;
        product.totalPrice = givenProducts?.[ i ]?.total ?? '';
        product.image = {
            sourceUrl: givenProduct?.image?.sourceUrl ?? '',
            srcSet: givenProduct?.image?.srcSet ?? '',
            title: givenProduct?.image?.title ?? '',
            altText: givenProduct?.image?.altText ?? ''
        };

        totalProductsCount += givenProducts?.[ i ]?.quantity;

        // Push each item into the products array.
        formattedCart.products.push( product );
    }

    formattedCart.totalProductsCount = totalProductsCount;
    formattedCart.totalProductsPrice = data?.cart?.total ?? '';

    return formattedCart;

};

export const createCheckoutData = ( order ) => {

    // Set the billing Data to shipping, if applicable.
    const billingData = order.billingDifferentThanShipping ? order.billing : order.shipping;

    const checkoutData = {
        clientMutationId: v4(),
        shipping: {
            firstName: order?.shipping?.firstName,
            lastName: order?.shipping?.lastName,
            address1: order?.shipping?.address1,
            address2: order?.shipping?.address2,
            city: order?.shipping?.city,
            country: order?.shipping?.country,
            state: order?.shipping?.state,
            postcode: order?.shipping?.postcode,
            email: order?.shipping?.email,
            phone: order?.shipping?.phone,
            company: order?.shipping?.company,
        },
        billing: {
            firstName: billingData?.firstName,
            lastName: billingData?.lastName,
            address1: billingData?.address1,
            address2: billingData?.address2,
            city: billingData?.city,
            country: billingData?.country,
            state: billingData?.state,
            postcode: billingData?.postcode,
            email: billingData?.email,
            phone: billingData?.phone,
            company: billingData?.company,
        },
        shipToDifferentAddress: order.billingDifferentThanShipping,
        paymentMethod: order.paymentMethod,
        isPaid: false,
    };

    if (order.createAccount) {
        checkoutData.account = {
            username: order.username,
            password: order.password,
        };
    }

    return checkoutData;
};