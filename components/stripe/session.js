const stripe = require('stripe')('sk_test_51K5auWBg2luewUqu4qN8P6YQuOIm223fXeUqYa6cmWXLWxmaASyLojknw2wQyuX5lD7EGY9TrGvjbAjHtg0vK8ZM00ccDmJKd2');
//const Stripe = async
const paymentIntent = async (amount) => {
    console.warn(await stripe.paymentIntents.create({
        amount: amount,
        currency: 'gbp',
        payment_method_types: ['card'],
    }))
}