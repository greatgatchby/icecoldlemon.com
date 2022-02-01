// noinspection JSUnresolvedFunction

import Link from 'next/link'
import React, {useState, useContext, useEffect} from 'react'
import {AppContext} from "../context/AppContext";
import {addFirstProduct, updateCart} from "../../utils/Functions";
import {Form} from "react-bootstrap";
import {gql, useMutation} from "@apollo/client";
import { v4 as uuidv4 } from 'uuid';
import {ADD_TO_CART} from "../mutations/ADD_TO_CART";
import data from "bootstrap/js/src/dom/data";
const AddToCartBtn = ( props ) => {
    //const { product } = props.props.product;
    let id = new Buffer(props.props.product.id, 'base64')
    id = id.toString('ascii').split(`:`)[1]
    const productQryInput = {
        clientMutationId: uuidv4(), // Generate a unique id.
        productId: parseInt(id),
        quantity: 1,
        category: props.props.product.category
    };
    const [cart, setCart] = useContext(AppContext);
    const [newCart, setNewCart] = useContext(AppContext)
    const [showViewCart, setShowViewCart] = useState(false);
    const [requestError, setRequestError] = useState(null);
    const [ variationSelected, setSelectedVariation ] = useState( '' );
    const [ addVariableToCart, setAddVariableToCart ] = useState( false );
    const [pathname, setPathName] = useState( '')

    useEffect(() => {
        setPathName(window.location.pathname)
    },[])

    const [addToCart, {
        data: addToCartRes,
        loading: addToCartLoading,
        error: addToCartError
    }] = useMutation(ADD_TO_CART, {
        variables: {
            quantity: productQryInput.quantity,
            productId: productQryInput.productId,
        },
        onCompleted: (data) => {
            // On Success:
            // 1. Make the GET_CART query to update the cart with new values in React context.
            refetch();
            // 2. Show View Cart Button
            setShowViewCart(true)
        },
        onError: (error) => {
            if (error) {
                setRequestError(error?.graphQLErrors?.[0]?.message ?? '');
            }
        }
    });
    const handleAddToCartClick = async () => {
        // If component is rendered client side.
        setRequestError(null);
        await addToCart()
    };
    const addVariable = (e) =>{
        if(addVariableToCart === false) {
            setSelectedVariation(e.target.value)
            setAddVariableToCart(true)
        }
    }
    return(
        <React.Fragment>
            {props.props.product.__typename === 'VariableProduct' ?
               props.props.product.attributes.nodes.map((attribute, index) => (
                   <div key={index}>
                       {attribute.name}
                       <Form.Select onChange={addVariable} className={'mb-2'}>
                           {attribute.options ? attribute.options.map(option => (
                               <option key={option} value={option} id={option}>{option}</option>
                           )) : ''}
                       </Form.Select>
                   </div>
               )): props.props.product.__typename === 'GroupProduct' && pathname === '/category' ?
                    <Link href={`/single-product?id="${props.props.product.id}"`} passHref><button className="btn btn-primary me-2 my-1">View Item</button></Link>
                    :
                    <button onClick={handleAddToCartClick} className="btn btn-outline-secondary me-2 my-1">Add to cart</button>

            }
            {addVariableToCart ? <>
                <button onClick={handleAddToCartClick} className="btn btn-outline-secondary me-2 my-1">Add to cart</button>
            </> : ''}
            {showViewCart ? (
               <Link href={"/cart"} passHref><button className="btn btn-primary me-2 my-1">View Cart</button></Link>
               ) : ''
                }
        </React.Fragment>
    )
};

export default AddToCartBtn;
