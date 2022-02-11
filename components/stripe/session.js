const stripe = require('stripe')('sk_test_51K5auWBg2luewUqu4qN8P6YQuOIm223fXeUqYa6cmWXLWxmaASyLojknw2wQyuX5lD7EGY9TrGvjbAjHtg0vK8ZM00ccDmJKd2');
const paymentIntent = async (amount) => {
    let intent = await stripe.paymentIntents.create({
        amount: amount,
        currency: 'gbp',
        payment_method_types: ['card'],
    })
    return intent
};


(async () => {
    console.warn(await paymentIntent(4000))
})()

module.exports = {paymentIntent}
