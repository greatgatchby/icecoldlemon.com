const stripe = require('stripe')('sk_test_51K5auWBg2luewUqu4qN8P6YQuOIm223fXeUqYa6cmWXLWxmaASyLojknw2wQyuX5lD7EGY9TrGvjbAjHtg0vK8ZM00ccDmJKd2');
//const Stripe = async
    let price = async () => {
       await stripe.prices.create({
        unit_amount: 50000,
        currency: 'usd',
        recurring: {interval: 'month'},
        product: 'prod_L5amxmjhG30mi5',
    })
        /*const session = await stripe.checkout.sessions.create({
            success_url: 'https://example.com/success',
            cancel_url: 'https://example.com/cancel',
            line_items: [
                {price: '35', quantity: 2},
            ],
            mode: 'payment',
        });
        conole.warn(session)
         */
    }