import React, { useState, useEffect } from 'react';
import {GET_CART} from "../queries/cart";
import client from "../ApolloClient";

export const AppContext = React.createContext(undefined);

/**
 * Provides a global application context for the entire application with the cart contents
 */
export const AppProvider = (props) => {
    const [cart, setCart] = useState(null);
    const [requestError, setRequestError] = useState(null);
    useEffect(async () => {
        const wooCart = await client.query({query: GET_CART})
        console.log('woo-next-cart', wooCart.data)
        let products = []
        for (let i = 0; i < wooCart.data.cart.contents.edges.length;i++){
            let product = wooCart.data.cart.contents.edges[i]
            product = {
                id:product.node.product.node.id,
                key: product.node.key,
                image:product.node.product.node.image.sourceUrl,
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
        setCart(newCart)
        localStorage.setItem('woo-next-cart', JSON.stringify(newCart))
    },[setCart])
    /*
    useEffect(() => {
        // Check if we are client-side before we access the localStorage
        if (process.browser) {
            let cartData = localStorage.getItem('woo-next-cart');
            cartData = null !== cartData ? JSON.parse(cartData) : '';
            setCart(cartData);
        }
    }, [setCart]);*/
    return (
        <AppContext.Provider value={[cart, setCart]}>
            {props.children}
        </AppContext.Provider>
    );
};
