import {Cart} from "react-bootstrap-icons";
import {AppContext} from "../context/AppContext";
import NextLink  from 'next/link'
import {Badge, Button} from "react-bootstrap";
import React, {useContext, useEffect} from "react";

const CartIcon = () => {
    const [cart,setCart] = useContext(AppContext)
    let productCount = (null!== cart && Object.keys(cart).length ? cart.totalProductsCount : '')
    let totalPrice = (null!== cart && Object.keys(cart).length ? cart.totalProductsPrice : '')
    useEffect(() => {
        productCount = (null!== cart && Object.keys(cart).length ? cart.totalProductsCount : '')
        totalPrice =  (null!== cart && Object.keys(cart).length ? cart.totalProductsPrice : '')
    }, [setCart])

    return (
        <NextLink  href={'/cart'}>
            <a className={'td-none d-flex'}>
                <Button className={'btn btn-primary btn-header me-4 position-relative'}>
                    <Cart />
                    {productCount ? <Badge bg={'danger'} className={'position-absolute rounded-pill left-100'}>{productCount}</Badge>: ''}
                </Button>
                <div className={'align-self-center'}>
                    {totalPrice ? <b className={'text-gold'}>{totalPrice}</b>: ''}
                </div>
            </a>
        </NextLink >
    )
}
export default CartIcon;
