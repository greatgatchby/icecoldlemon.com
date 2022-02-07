import {Button, Card, Col, FormSelect, Row} from "react-bootstrap";
import Image from "next/image";
import clearpayLogo from "../../assets/clearpay-badge-mintonblack79x15@2x.png";
import applePayLogo from "../../assets/Apple_Pay_Mark_RGB_041619.svg";
import googlePayLogo from "../../assets/GPay_Acceptance_Mark_800.png";
import stripeLogo from "../../assets/Stripe wordmark - blurple (large).png";
import React, {useContext, useState} from "react";
import {AppContext} from "../context/AppContext";
import {CHECKOUT} from '../mutations/checkout'
import {useMutation} from "@apollo/client";
import {updateCart} from '../../utils/Functions'

const Checkout = () => {
    const [cart,setCart] = useContext(AppContext)
    const [,setRequestError] = useContext(AppContext)
    const [billingEQshipping, setbillingEQshipping] = useState(true)
    let checkOutQryInput = {
        billing: {address1: "18 wadleys road",
            city: "solihull",
            address2: "",
            country: 'GB',
            email: "jngatchu@gmail.com",
            firstName: "Jake",
            lastName: "Ngatchu",
            phone: "07935242587",
            state: "warwickshire",
            zip: 'b911jj'
        },
        paymentMethod: "stripe",
        shipping: {address1: "Q studoios",
            city: "stoke-on-trent",
            address2: "",
            country: 'GB',
            email: "jngatchu@gmail.com",
            firstName: "Jake",
            lastName: "Ngatchu",
            phone: "07935242587",
            state: "staffordshire",
            zip: 'st47dq'
        },
    }
    const checkOutInput = billingEQshipping === false ? checkOutQryInput.billing + ',' + checkOutQryInput.shipping : checkOutQryInput.billing
    const [checkout, {
        data: checkoutRes,
        loading: checkOutLoading,
        error: checkOutError
    }] = useMutation(CHECKOUT, {
        variables: {
            input: checkOutInput
        },
        onCompleted: () => {
            updateCart(setCart)
            setShowViewCart(true)
        },
        onError: (error) => {
            if (error) {
                setRequestError(error?.graphQLErrors?.[0]?.message ?? '');
            }
        }
    })
    const handleCheckoutClick = async () => {
        let redirect = await checkout
        console.warn(redirect())
    }
    const handleShippingSameasbilling = (e) => {
        setbillingEQshipping(e.target.checked)
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
                            <FormSelect onChange={()=> console.warn('hello')}>
                                <option>Express</option>
                                <option>Standard</option>
                                <option>Click and Collect</option>
                            </FormSelect>
                        </form>
                    </Col>
                </Row>
                <Row className={'d-flex justify-content-center p-3'}>
                    <div className="col-md-8 order-md-1 p-2">
                        <h4 className="mb-3">Billing address</h4>
                        <form className="needs-validation" noValidate="">
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="firstName">First name</label>
                                    <input type="text" className="form-control" id="firstName" placeholder="" value=""
                                           required=""/>
                                        <div className="invalid-feedback">
                                            Valid first name is required.
                                        </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="lastName">Last name</label>
                                    <input type="text" className="form-control" id="lastName" placeholder="" value=""
                                           required=""/>
                                        <div className="invalid-feedback">
                                            Valid last name is required.
                                        </div>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="username">Username</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">@</span>
                                    </div>
                                    <input type="text" className="form-control" id="username" placeholder="Username"
                                           required=""/>
                                        <div className="invalid-feedback">
                                            Your username is required.
                                        </div>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email">Email <span className="text-muted">(Optional)</span></label>
                                <input type="email" className="form-control" id="email" placeholder="you@example.com"/>
                                    <div className="invalid-feedback">
                                        Please enter a valid email address for shipping updates.
                                    </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="address">Address</label>
                                <input type="text" className="form-control" id="address" placeholder="1234 Main St"
                                       required=""/>
                                    <div className="invalid-feedback">
                                        Please enter your shipping address.
                                    </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="address2">Address 2 <span
                                    className="text-muted">(Optional)</span></label>
                                <input type="text" className="form-control" id="address2"
                                       placeholder="Apartment or suite"/>
                            </div>

                            <div className="row">
                                <div className="col-md-5 mb-3">
                                    <label htmlFor="country">Country</label>
                                    <select className="custom-select d-block w-100" id="country" required="" onChange={()=> console.warn('hello')}>
                                        <option value="">Choose...</option>
                                        <option>United Kingdom</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please select a valid country.
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label htmlFor="state">County</label>
                                    <select className="custom-select d-block w-100" id="state" required="" onChange={()=> console.warn('hello')}>
                                        <option value="">Choose...</option>
                                        <option>Staffordshire</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please provide a valid state.
                                    </div>
                                </div>
                                <div className="col-md-3 mb-3">
                                    <label htmlFor="zip">Postcode</label>
                                    <input type="text" className="form-control" id="zip" placeholder="" required=""/>
                                    <div className="invalid-feedback">
                                        Postcode required.
                                    </div>
                                </div>
                            </div>
                            <hr className="mb-4" />
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="same-address" counter={1} checked={billingEQshipping} onChange={handleShippingSameasbilling}/>
                                        <label className="custom-control-label" htmlFor="same-address">Shipping address
                                            is the same as my billing address</label>
                                </div>
                            <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="save-info"/>
                                        <label className="custom-control-label" htmlFor="save-info">Register to Save Information for next time</label>
                                </div>
                            {billingEQshipping === false ? <div>
                                <h3 className={'mt-5'}>Shipping</h3>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="firstName">First name</label>
                                        <input type="text" className="form-control" id="firstName" placeholder="" value=""
                                               required=""/>
                                        <div className="invalid-feedback">
                                            Valid first name is required.
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="lastName">Last name</label>
                                        <input type="text" className="form-control" id="lastName" placeholder="" value=""
                                               required=""/>
                                        <div className="invalid-feedback">
                                            Valid last name is required.
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="username">Username</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">@</span>
                                        </div>
                                        <input type="text" className="form-control" id="username" placeholder="Username"
                                               required=""/>
                                        <div className="invalid-feedback">
                                            Your username is required.
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email">Email <span className="text-muted">(Optional)</span></label>
                                    <input type="email" className="form-control" id="email" placeholder="you@example.com"/>
                                    <div className="invalid-feedback">
                                        Please enter a valid email address for shipping updates.
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="address">Address</label>
                                    <input type="text" className="form-control" id="address" placeholder="1234 Main St"
                                           required=""/>
                                    <div className="invalid-feedback">
                                        Please enter your shipping address.
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="address2">Address 2 <span
                                        className="text-muted">(Optional)</span></label>
                                    <input type="text" className="form-control" id="address2"
                                           placeholder="Apartment or suite"/>
                                </div>

                                <div className="row">
                                    <div className="col-md-5 mb-3">
                                        <label htmlFor="country">Country</label>
                                        <select className="custom-select d-block w-100" id="country" required="" onChange={()=> console.warn('hello')}>
                                            <option value="">Choose...</option>
                                            <option>United Kindom</option>
                                        </select>
                                        <div className="invalid-feedback">
                                            Please select a valid country.
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label htmlFor="state">County</label>
                                        <select className="custom-select d-block w-100" id="state" required="" onChange={()=> console.warn('hello')}>
                                            <option value="">Choose...</option>
                                            <option>Staffordshire</option>
                                        </select>
                                        <div className="invalid-feedback">
                                            Please provide a valid state.
                                        </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="zip">Postcode</label>
                                        <input type="text" className="form-control" id="zip" placeholder="" required=""/>
                                        <div className="invalid-feedback">
                                            Postcode required.
                                        </div>
                                    </div>
                                </div>
                            </div> : ''}
                        </form>
                    </div>
                </Row>
                <div className={'w-100 card-header'}>
                    <Card.Title>
                        <div>Subtotal:</div>
                        <div>Shipping:</div>
                        <div>Total:</div>
                    </Card.Title>
                </div>
            </Card.Body>
            <Card.Footer>
                <Button className={'w-100'} onClick={()=>handleCheckoutClick()}>Checkout</Button>
            </Card.Footer>
        </Card>
    )
 }

export default Checkout

//get checkout options from woo-commerce


