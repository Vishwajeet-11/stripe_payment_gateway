require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
// another comment because of the obvious reasons
const renderBuyPage = async (req, res) => {
    try {
        res.render("buy", {
            key: process.env.STRIPE_PUBLISHABLE_KEY,
            amount: 25,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};

// ✅ Make sure to export it correctly as an object
module.exports = {
    renderBuyPage,
};
