import {Button, Card, Col, FormSelect, Row} from "react-bootstrap";
import React, {useContext, useState} from "react";
import {AppContext} from "../context/AppContext";
import {CHECKOUT} from '../mutations/checkout'
import {CLEAR_CART_MUTATION} from '../mutations/clearCart'
import {GET_CART} from '../queries/cart'
import {useMutation, useQuery} from "@apollo/client";
import {handleStripeCheckout} from '../stripe/session'
import {getFloatVal} from '../../utils/Functions'


const Checkout = () => {
    const [cart,setCart] = useContext(AppContext)
    const [,setRequestError] = useContext(AppContext)
    const [billingEQshipping, setbillingEQshipping] = useState(true)
    const [shipping, setShipping] = useState(null)
    const [billingFirstName, setBillingFirstName] = useState('')
    const [billingLastName, setBillingLastName] = useState('')
    const [billingCity, setBillingCity] = useState('')
    const [billingAddress1, setBillingAddress1] = useState('')
    const [billingAddress2, setBillingAddress2] = useState('')
    const [billingCountry, setBillingCountry] = useState('')
    const [billingEmail, setBillingEmail] = useState('')
    const [billingPhone, setBillingPhone] = useState('')
    const [billingState, setBillingState] = useState('')
    const [billingZip, setBillingZip] = useState('')
    const [username, setUsername] = useState('')
    const [shippingFirstName, setShippingFirstName] = useState('')
    const [shippingLastName, setShippingLastName] = useState('')
    const [shippingCity, setShippingCity] = useState('')
    const [shippingAddress1, setShippingAddress1] = useState('')
    const [shippingAddress2, setShippingAddress2] = useState('')
    const [shippingCountry, setShippingCountry] = useState('')
    const [shippingEmail, setShippingEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [shippingState, setShippingState] = useState('')
    const [shippingZip, setShippingZip] = useState('')
    const [isStripeOrderProcessing, setIsStripeOrderProcessing] = useState(false);
    const [createdOrderData, setCreatedOrderData] = useState({});

    let checkOutQryInput = {
        billing: {address1: billingAddress1,
            city: billingCity,
            address2: billingAddress2,
            country: 'GB',
            email: billingEmail,
            firstName: billingFirstName,
            lastName: billingLastName,
            phone: billingPhone,
            state: billingState,
            zip: billingZip
        },
        paymentMethod: "stripe",
        shipping: {
            address1: shippingAddress1,
            city: shippingCity,
            address2: shippingAddress2,
            country: shippingCountry,
            email: shippingEmail,
            firstName: shippingFirstName,
            lastName: shippingLastName,
            phone: phone,
            state: shippingState,
            zip: shippingZip
        }
    }
    billingEQshipping === true ? checkOutQryInput = {
        billing: {address1: billingAddress1,
            city: billingCity,
            address2: billingAddress2,
            country: 'GB',
            email: billingEmail,
            firstName: billingFirstName,
            lastName: billingLastName,
            phone: phone,
            state: billingState,
            zip: billingZip
        },
        paymentMethod: "stripe",
        shipping: {
            address1: billingAddress1,
                city: billingCity,
                address2: billingAddress2,
                country: 'GB',
                email: billingEmail,
                firstName: billingFirstName,
                lastName: billingLastName,
                phone: phone,
                state: billingState,
                zip: billingZip
        }
    } : null
    const handleShippingSameasbilling = (e) => {
        setbillingEQshipping(e.target.checked)
    }
    const [checkout, {
        data: checkoutResponse,
        loading: checkoutLoading,
    }] = useMutation(CHECKOUT, {
        variables: {
            input: checkOutQryInput
        },
        onError: (error) => {
            if (error) {
                setRequestError(error?.graphQLErrors?.[0]?.message ?? '');
            }
        }
    });
    const [ clearCartMutation ] = useMutation( CLEAR_CART_MUTATION );

    const handleShippingChange = (e) => {
        e.preventDefault()
        setShipping(e.target.value)
        console.warn(e.target.value)
    }
    const handleBillingFirstNameChange = (e) => {
        setBillingFirstName(e.target.value)
    }
    const handleBillingLastNameChange = (e) => {
        setBillingLastName(e.target.value)
    }
    const handleBillingAddress1Change = (e) => {
        setBillingAddress1(e.target.value)
    }
    const handleBillingAddress2Change = (e) => {
        setBillingAddress2(e.target.value)
    }
    const handleBillingCountryChange = (e) => {
        setBillingCountry(e.target.value)
    }
    const handleBillingCityChange = (e) => {
        setBillingCity(e.target.value)
    }
    const handleBillingEmailChange = (e) => {
        setBillingEmail(e.target.value)
    }
    const handleBillingStateChange = (e) => {
        setBillingState(e.target.value)
    }
    const handleBillingZipChange = (e) => {
        setBillingZip(e.target.value)
    }
    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }
    const handleShippingFirstNameChange = (e) => {
        setShippingFirstName(e.target.value)
    }
    const handleShippingLastNameChange = (e) => {
        setShippingLastName(e.target.value)
    }
    const handleShippingAddress1Change = (e) => {
        setShippingAddress1(e.target.value)
    }
    const handleShippingAddress2Change = (e) => {
        setShippingAddress2(e.target.value)
    }
    const handleShippingCountryChange = (e) => {
        setShippingCountry(e.target.value)
    }
    const handleShippingCityChange = (e) => {
        setShippingCity(e.target.value)
    }
    const handleShippingEmailChange = (e) => {
        setShippingEmail(e.target.value)
    }
    const handlePhoneChange = (e) => {
        setPhone(e.target.value)
    }
    const handleShippingStateChange = (e) => {
        setShippingState(e.target.value)
    }
    const handleShippingZipChange = (e) => {
        setShippingZip(e.target.value)
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        if ( 'stripe' === checkOutQryInput.paymentMethod ) {
            const createdOrderData = await handleStripeCheckout(checkOutQryInput, cart?.products, setRequestError, clearCartMutation, setIsStripeOrderProcessing, setCreatedOrderData);
            return null;
        }
        const checkOutData = checkOutQryInput;
        setRequestError(null);
        /**
         *  When order data is set, checkout mutation will automatically be called,
         *  because 'orderData' is added in useEffect as a dependency.
         */
        setOrderData(checkOutData);
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
                            <FormSelect onChange={handleShippingChange} value={shipping}>
                                <option>...</option>
                                <option value={'express'}>Express</option>
                                <option value={'standard'}>Standard</option>
                                <option value={'click and collect'}>Click and Collect</option>
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
                                    <input type="text" className="form-control" id="firstName" placeholder="" value={billingFirstName} onChange={handleBillingFirstNameChange}
                                           required=""/>
                                        <div className="invalid-feedback">
                                            Valid first name is required.
                                        </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="lastName">Last name</label>
                                    <input type="text" className="form-control" id="lastName" placeholder="" value={billingLastName} onChange={handleBillingLastNameChange}
                                           required=""/>
                                        <div className="invalid-feedback">
                                            Valid last name is required.
                                        </div>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="username">Username <small className={'text-secondary'}>(optional)</small></label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">@</span>
                                    </div>
                                    <input type="text" className="form-control" id="username" placeholder="Username"
                                           required="" value={username} onChange={handleUsernameChange}/>
                                        <div className="invalid-feedback">
                                            Your username is required.
                                        </div>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="you@example.com" value={billingEmail} onChange={handleBillingEmailChange}/>
                                    <div className="invalid-feedback">
                                        Please enter a valid email address for shipping updates.
                                    </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="address">Address</label>
                                <input type="text" className="form-control" id="address" placeholder="1234 Main St"
                                       required="" value={billingAddress1} onChange={handleBillingAddress1Change}/>
                                    <div className="invalid-feedback">
                                        Please enter your shipping address.
                                    </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="address2">Address 2 <span
                                    className="text-muted">(Optional)</span></label>
                                <input type="text" className="form-control" id="address2"
                                       placeholder="Apartment or suite"
                                       required="" value={billingAddress2} onChange={handleBillingAddress2Change}/>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="city">City</label>
                                <input type="text" className="form-control" id="city"
                                       placeholder="City"
                                       required="" value={billingCity} onChange={handleBillingCityChange}/>
                            </div>

                            <div className="row">
                                <div className="col-md-5 mb-3">
                                    <label htmlFor="country">Country</label>
                                    <select className="custom-select d-block w-100" id="country" required="" onChange={handleBillingCountryChange}>
                                        <option value={billingCountry}>Choose...</option>
                                        <option>United Kingdom</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please select a valid country.
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label htmlFor="state">County</label>
                                    <select className="custom-select d-block w-100" id="state" required="" onChange={handleBillingStateChange} value={billingState}>
                                        <option>Choose...</option>
                                        <option value="Warwickshire">Warwickshire</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please provide a valid state.
                                    </div>
                                </div>
                                <div className="col-md-3 mb-3">
                                    <label htmlFor="zip">Postcode</label>
                                    <input type="text" className="form-control" id="zip" placeholder="" required="" value={billingZip} onChange={handleBillingZipChange}/>
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
                                        <input type="text" className="form-control" id="firstName" placeholder="" value={shippingFirstName} onChange={handleShippingFirstNameChange}
                                               required=""/>
                                        <div className="invalid-feedback">
                                            Valid first name is required.
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="lastName">Last name</label>
                                        <input type="text" className="form-control" id="lastName" placeholder="" value={shippingLastName} onChange={handleShippingLastNameChange}
                                               required=""/>
                                        <div className="invalid-feedback">
                                            Valid last name is required.
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="you@example.com" value={shippingEmail} onChange={handleShippingEmailChange}/>
                                    <div className="invalid-feedback">
                                        Please enter a valid email address for shipping updates.
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="address">Address</label>
                                    <input type="text" className="form-control" id="address" placeholder="1234 Main St"
                                           required="" value={billingAddress1} onChange={handleShippingAddress1Change}/>
                                    <div className="invalid-feedback">
                                        Please enter your shipping address.
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="address2">Address 2 <span
                                        className="text-muted">(Optional)</span></label>
                                    <input type="text" className="form-control" id="address2"
                                           placeholder="Apartment or suite"
                                           required="" value={shippingAddress2} onChange={handleShippingAddress2Change}/>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="city">City</label>
                                    <input type="text" className="form-control" id="city"
                                           placeholder="City"
                                           required="" value={shippingCity} onChange={handleShippingCityChange}/>
                                </div>

                                <div className="row">
                                    <div className="col-md-5 mb-3">
                                        <label htmlFor="country">Country</label>
                                        <select className="custom-select d-block w-100" id="country" required="" onChange={handleShippingCountryChange} value={shippingCountry}>
                                            <option>Choose...</option>
                                            <option value={'GB'}>United Kingdom</option>
                                        </select>
                                        <div className="invalid-feedback">
                                            Please select a valid country.
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label htmlFor="state">County</label>
                                        <select className="custom-select d-block w-100" id="state" required="" onChange={handleShippingStateChange} value={shippingState}>
                                            <option value="">Choose...</option>
                                            <option>Staffordshire</option>
                                        </select>
                                        <div className="invalid-feedback">
                                            Please provide a valid state.
                                        </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="zip">Postcode</label>
                                        <input type="text" className="form-control" id="zip" placeholder="" required="" value={shippingZip} onChange={handleShippingZipChange}/>
                                        <div className="invalid-feedback">
                                            Postcode required.
                                        </div>
                                    </div>
                                </div>
                            </div> : ''}
                            <div className="mb-3">
                                <label htmlFor="city">Phone</label>
                                <input type="text" className="form-control" id="phone" type={'tel'}
                                       placeholder="+44 XXXXXXXXXXX"
                                       required="" value={phone} onChange={handlePhoneChange}/>
                            </div>
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
                <Button className={'w-100'} onClick={handleFormSubmit}>Checkout</Button>
            </Card.Footer>
        </Card>
    )
 }

export default Checkout

//get checkout options from woo-commerce


