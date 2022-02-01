import {Col, Container, Row} from "react-bootstrap";
import CartItems from "../components/cart/cart-page/CartItems";
import Checkout from "../components/cart/Checkout";
import React from "react";

const Cart = () => {
    return(
        <>
            <Container fluid className={'cart'}>
                <Row lg={2} md={1} sm={1} xs={1} className={'py-5'}>
                    <Col className={'pb-4'}>
                        <CartItems />
                    </Col>
                    <Col>
                        <Checkout />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Cart;
