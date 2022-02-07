import React, { useState, useEffect } from 'react';
import {GET_CART} from "../queries/cart";
import client from "../ApolloClient";
import {updateCart} from '../../utils/Functions'

export const AppContext = React.createContext(undefined);

/**
 * Provides a global application context for the entire application with the cart contents
 */
export const AppProvider = (props) => {
    const [cart, setCart] = useState(null);
    const [requestError, setRequestError] = useState(null);
    useEffect( () => {
        updateCart(setCart)
    },[])
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
