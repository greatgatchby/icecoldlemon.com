import { createCheckoutSession } from 'next-stripe/client' // @see https://github.com/ynnoj/next-stripe
import { loadStripe } from "@stripe/stripe-js";
import {isEmpty, isArray} from 'lodash'

export const getCreateOrderData = (order, products) => {
    // Set the billing Data to shipping, if applicable.
    // Checkout data.
    return {
        shipping: {
            first_name: order?.shipping?.firstName,
            last_name: order?.shipping?.lastName,
            address_1: order?.shipping?.address1,
            address_2: order?.shipping?.address2,
            city: order?.shipping?.city,
            country: order?.shipping?.country,
            state: order?.shipping?.state,
            postcode: order?.shipping?.zip,
            email: order?.shipping?.email,
            phone: order?.shipping?.phone,
            company: order?.shipping?.company,
        },
        billing: {
            first_name: order?.billing?.firstName,
            last_name: order?.billing?.lastName,
            address_1: order?.billing?.address1,
            address_2: order?.billing?.address2,
            city: order?.billing?.city,
            country: order?.billing?.country,
            state: order?.billing?.state,
            postcode: order?.billing?.zip,
            email: order?.billing?.email,
            phone: order?.billing?.phone,
            company: order?.billing?.company,
        },
        payment_method: 'stripe',
        payment_method_title: 'Stripe',
        line_items: getCreateOrderLineItems( products ),
    };
}

export const getCreateOrderLineItems = (products) => {
    if (isEmpty(products) || !isArray( products )) {
        return []
    }

    return products?.map(
        ({id, qty: quantity}) => {
            id = new Buffer(id, "base64")
            id = id.toString('ascii').split(':')[1]
            return {
                quantity,
                product_id: id,
                // variation_id: '', // @TODO to be added.
            };
        },
    );
}

export const createTheOrder = async ( orderData, setOrderFailedError, previousRequestError ) => {
    let response = {
        orderId: null,
        total: '',
        currency: '',
        error: ''
    };

    // Don't proceed if previous request has error.
    if ( previousRequestError ) {
        response.error = previousRequestError;
        return response;
    }

    setOrderFailedError( '' );
    try {
        const request = await fetch( '/api/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify( orderData ),
        } );

        const result = await request.json();
        if ( result.error ) {
            response.error = result.error
            setOrderFailedError( 'Something went wrong. Order creation failed. Please try again' );
        }
        response.id = result?.orderId ?? '';
        response.total = result.total ?? '';
        response.currency = result.currency ?? '';

    } catch ( error ) {
        // @TODO to be handled later.
        console.warn( 'Handle create order error', error?.message );
    }

    return response;
}

export const handleStripeCheckout = async (input, products, setRequestError, clearCartMutation, setIsStripeOrderProcessing, setCreatedOrderData) => {
    setIsStripeOrderProcessing(true);
    const orderData = getCreateOrderData( input, products );
    const createCustomerOrder = await createTheOrder( orderData, setRequestError,  '' );
    const cartCleared = await clearTheCart( clearCartMutation, createCustomerOrder?.error );
    setIsStripeOrderProcessing(false);

    console.warn(orderData)
    if ( isEmpty( createCustomerOrder?.orderId ) || cartCleared?.error ) {
        console.log( 'came in' );
        setRequestError('Clear cart failed')
        return null;
    }

    // On success show stripe form.
    setCreatedOrderData(createCustomerOrder)
    await createCheckoutSessionAndRedirect( products, input, createCustomerOrder?.orderId );

    return createCustomerOrder;
}

export const clearTheCart = async (clearCartMutation, previousRequestError) => {
    let response = {
        cartCleared: false,
        error: ''
    };

    // Don't proceed if previous request has error.
    if ( previousRequestError ) {
        response.error = previousRequestError;
        return response;
    }

    try {
        const {data} = await clearCartMutation( {
            variables: {
                input: {
                    clientMutationId: uuidv4(),
                    all: true,
                },
            },
        } );

        response.cartCleared = data?.removeItemsFromCart?.cartItems.length;

    } catch ( err ) {
        response.error = err.message;
    }

    return response;
}
