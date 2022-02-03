// noinspection JSValidateTypes

import React from "react";
import {X} from "react-bootstrap-icons";
import {removeItemFromCart, updateCart, getid} from "../../../utils/Functions";
import { useState, useContext } from "react"
import Image from "next/image";
import {useMutation} from "@apollo/client";
import {REMOVE_FROM_CART} from "../../mutations/remove from cart";
import {CHANGE_QUANTITY} from "../../mutations/CHANGE_QUANTITY";
import {AppContext} from '../../context/AppContext'

const CartItem = ({item, index, setCart}) => {
    const [ productCount, setProductCount ] = useState( item.qty );
    const [requestError, setRequestError] = useContext(AppContext)
    console.warn(item)
    let productQryInput = {
        productId: item.id,
        quantity: productCount,
        key: item.key
    }
    const [removeItem, {
        data: addToCartRes,
        loading: addToCartLoading,
        error: addToCartError
    }] = useMutation(REMOVE_FROM_CART, {
        variables: {
            keys: productQryInput.productId,
        },
        onCompleted: (data) => {
            // On Success:
            // 1. Make the GET_CART query to update the cart with new values in React context.
            // 2. Show View Cart Button
        },
        onError: (error) => {
            if (error) {
                setRequestError(error?.graphQLErrors?.[0]?.message ?? '');
            }
        }
    });
    const [updateItem, {
        data: updateCartRes,
        loading: updateCartLoading,
        error: updateCartError
    }] = useMutation(CHANGE_QUANTITY, {
        variables: {
            key: productQryInput.key,
            quantity: parseInt(productQryInput.quantity)
        },
        onCompleted: () => {
            // On Success:
            // 1. Make the GET_CART query to update the cart with new values in React context.
            // 2. Show View Cart Button
        },
        onError: (error) => {
            if (error) {
                setRequestError(error?.graphQLErrors?.[0]?.message ?? '');
            }
        }
    });
    const handleRemoveProduct = (id) => {
        removeItem()
    }
    const handleChange = async ( e ) => {
        setProductCount(e.target.value)
        let result = await updateItem()
        console.warn(result)
        /*
        if ( process.browser ) {

            const newQty = event.target.value;

            // Set the new qty in State
            setProductCount( newQty );

            let existingCart = localStorage.getItem( 'woo-next-cart' );
            existingCart = JSON.parse( existingCart );

            // Update the cart in localStorage.
            const updatedCart = updateCart( existingCart, item, newQty, true );

            // Update the cart in global context
            setCart( updatedCart );

        }
         */
    };
    return (
        <tr className={'cart-item'}>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>{item.image ? (
                <Image alt={item.name} width={50} height={50} className={'card-image-top'} src={item.image}/>
            ): <Image alt={item.name} width={50} height={50} className={'card-image-top'} src={`https://via.placeholder.com/800x800?text='${item.name}'`}/>}</td>
            <td>{item.price}</td>
            <td>{item.totalPrice}</td>
            <td><input type={'number'} min={1} className={'form-control'} value={ productCount } onChange={handleChange}/></td>
            <td className={'remove-from-cart'} onClick={handleRemoveProduct}><X /></td>
        </tr>
    )
}
export default CartItem
