import {Button, Card, Col, FormSelect, Row} from "react-bootstrap";
import Image from "next/image";
import clearpayLogo from "../../assets/clearpay-badge-mintonblack79x15@2x.png";
import applePayLogo from "../../assets/Apple_Pay_Mark_RGB_041619.svg";
import googlePayLogo from "../../assets/GPay_Acceptance_Mark_800.png";
import stripeLogo from "../../assets/Stripe wordmark - blurple (large).png";
import React, {useContext} from "react";
import {checkOutInitiation} from "../../utils/Functions";
import {AppContext} from "../context/AppContext";

const Checkout = () => {
    const [cart,setCart] = useContext(AppContext)
    const handleCheckoutClick = () => {
        checkOutInitiation()
    }
    return (
        <Card className={'p-0 m-0'}>
            <Card.Header>
                <Card.Title>Checkout</Card.Title>

            </Card.Header>
            <Card.Body className={'p-0'}>
                <div className={'w-100 card-header'}>Shipping Method</div>
                <Row className={'d-flex justify-content-center p-3'}>
                    <Col xs={8}>
                        <form>
                            <FormSelect>
                                <option>Express</option>
                                <option>Standard</option>
                                <option>Click and Collect</option>
                            </FormSelect>
                        </form>
                    </Col>
                </Row>
                <div className={'w-100 card-header'}>Accepted Payment Methods Method</div>
                <Row className={'p-4'}>
                    <Col xs={3}>
                        <Image src={clearpayLogo} alt={'clear pay'} />
                    </Col>
                    <Col xs={3}>
                        <Image src={applePayLogo} alt={'apple pay'} />
                    </Col>
                    <Col xs={3}>
                        <Image src={googlePayLogo} alt={'google pay'}/>
                    </Col>
                    <Col xs={3}>
                        <Image src={stripeLogo} alt={'pay with debit card using stripe'} />
                    </Col>
                </Row>
                <Row className={'d-flex justify-content-center p-3'}>
                    <Col xs={8}>
                        <form>
                            <FormSelect>
                                <option hidden>Payment Method</option>
                                <option>Clearpay</option>
                                <option>Express</option>
                                <option>GPay</option>
                                <option>ApplePay</option>
                                <option>Card</option>
                            </FormSelect>
                        </form>
                    </Col>
                </Row>
                <div className={'w-100 card-header'}>
                    <Card.Title>
                        Total
                    </Card.Title>
                </div>
                <Row className={'d-flex flex-column p-2'}>
                    <div>Subtotal:</div>
                    <div>Shipping:</div>
                    <div>Total:</div>
                </Row>
            </Card.Body>
            <Card.Footer>
                <Button className={'w-100'} onClick={handleCheckoutClick}>Checkout</Button>
            </Card.Footer>
        </Card>
    )
 }

export default Checkout

//get checkout options from woo-commerce


