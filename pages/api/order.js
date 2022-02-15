const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
import {isEmpty} from 'lodash'

const api = new WooCommerceRestApi({
    url: process.env.NEXT_PUBLIC_WORDPRESS_URL,
    consumerKey: process.env.WC_CONSUMER_KEY,
    consumerSecret: process.env.WC_CONSUMER_SECRET,
    version: "wc/v3"
});

/**
 * Create order endpoint.
 *
 * @see http://woocommerce.github.io/woocommerce-rest-api-docs/?javascript#create-an-order
 *
 * @param {Object} req Request.
 * @param {Object} res Response.
 *
 * @return {Promise<{orderId: string, success: boolean, error: string}>}
 */
export default async function handler(req, res) {

    const responseData = {
        success: false,
        orderId: '',
        total: '',
        currency: '',
        error: '',
        data: ''
    }

    if ( isEmpty(req.body) ) {
        responseData.error = 'Required data not sent';
        return responseData
    }

    const data = req.body;
    data.status = 'pending';
    data.set_paid = false;

    try {
        const {data} = await api.post(
            'orders',
            req.body
        );

        responseData.success = true;
        responseData.orderId = data.number;
        responseData.total = data.total;
        responseData.currency = data.currency;
        responseData.data = data;
        res.json(data)

    } catch (error) {
        responseData.error = error.message;
        res.status(500).json(error);
    }
}
