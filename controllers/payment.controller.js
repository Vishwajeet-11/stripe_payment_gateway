const {STRIPE_PUBLISHABLE_KEY, STRIPE_SECRET_KEY} = process.env;

const stripe = require('stripe')(STRIPE_SECRET_KEY)

const renderBuyPage = async(req, res) => {
    try{
        res.render('buy', {
            key: STRIPE_PUBLISHABLE_KEY,
            amount: 25
        })
    }catch(error){
        console.log(error);
    }
}