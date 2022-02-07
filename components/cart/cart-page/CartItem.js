// noinspection JSValidateTypes

import React from "react";
import {X} from "react-bootstrap-icons";
import { useState, useContext } from "react"
import Image from "next/image";
import {useMutation} from "@apollo/client";
import {REMOVE_FROM_CART} from "../../mutations/remove from cart";
import CHANGE_QUANTITY from "../../mutations/change_quantity";
import {AppContext} from '../../context/AppContext'
import {updateCart} from  '../../../utils/Functions'

const CartItem = ({item, index, setCart}) => {
    const [ productCount, setProductCount ] = useState( item.qty );
    const [, setRequestError] = useContext(AppContext)
    //let id = new Buffer(item.id, 'base64')
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
            keys: productQryInput.key,
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
    const [updateItem, {
        data: updateCartRes,
        loading: updateCartLoading,
        error: updateCartError
    }] = useMutation(CHANGE_QUANTITY, {
        variables: {
            key: productQryInput.key,
            quantity: parseInt(productQryInput.quantity)
        },
        onCompleted: async () => {
            // On Success:
            // 1. Make the GET_CART query to update the cart with new values in React context.
            // 2. Show View Cart Button
            await updateCart(setCart)
        },
        onError: (error) => {
            if (error) {
                setRequestError(error?.graphQLErrors?.[0]?.message ?? '');
            }
        }
    });
    const handleRemoveProduct = async () => {
        await removeItem()
        updateCart(setCart)
    }
    const handleChange = async ( e ) => {
        await setProductCount(e.target.value)
        updateItem()
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
