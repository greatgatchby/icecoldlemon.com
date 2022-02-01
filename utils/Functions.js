/**
 * Extracts and returns float value from a string.
 *
 * @param {string} string String
 * @return {any}
 */
import client from "../components/ApolloClient";
import {gql, useMutation} from "@apollo/client";


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

export const updateCart = ( existingCart, product, qtyToBeAdded, newQty = false  ) => {
    const updatedProducts = getUpdatedProducts( existingCart , product, qtyToBeAdded, newQty );
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
//TODO get formatted cart
export const checkOutInitiation = async () => {


    let cart = localStorage.getItem('woo-next-cart')
    cart = JSON.parse(cart)
    const result = await client.mutate({mutation: ADD_TO_CART}, {variables: {productId:39, quantity: 2}})
    console.warn(result)
}
//TODO create checkout data
