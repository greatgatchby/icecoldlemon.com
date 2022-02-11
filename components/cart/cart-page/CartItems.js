import {Card, Table} from "react-bootstrap";
import React, {useContext} from "react";
import {AppContext} from "../../context/AppContext";
import CartItem from "./CartItem";
import {removeItemFromCart} from "../../../utils/Functions";
import {useMutation} from "@apollo/client";
import {ADD_TO_CART} from "../../mutations/ADD_TO_CART";
const CartItems = () =>{
    const [cart,setCart] = useContext(AppContext)
    return (
        <Card>
            <Card.Header>
                <Card.Title>Cart</Card.Title>
            </Card.Header>
            <Card.Body  className={'cart-body'}>
                {cart !== null && cart.products ?
                    <Table hover className={'m-0 table-responsive'}>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Item Name</th>
                            <th>image</th>
                            <th>Item Price</th>
                            <th>item total</th>
                            <th>item qty</th>
                        </tr>
                        </thead>
                        <tbody>
                        {cart.products ? cart.products.map((product, index) => (
                            <CartItem
                                key={ product.id }
                                item={ product }
                                index={index}
                                setCart={ setCart }
                            />
                        )) : ''}
                        </tbody>
                    </Table> : <div className={'p-5'}><h1>Cart Empty</h1></div>}
            </Card.Body>
            <Card.Footer>
                Total: <b>{cart !== null && cart ? <>{cart.totalProductsPrice}</> : '' }</b>
            </Card.Footer>
        </Card>
    )
}
export default CartItems;
