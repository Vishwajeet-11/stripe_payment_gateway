const express = require("express");
const paymentRoute = express();

const bodyParser = require('body-parser');
paymentRoute.use(bodyParser.json());
paymentRoute.use(bodyParser.urlencoded({extended: false}));

const path = require("path");
const { emitWarning } = require("process");

paymentRoute.set('view engine', 'ejs');
paymentRoute.set('views', path.join(__dirname, '../views'));

const paymentController = require("../controllers/payment.controller");
paymentRoute.get("/", paymentController.renderBuyPage);
paymentRoute.post("/payment", paymentController.payment);
paymentRoute.get("/success", paymentController.success);
paymentRoute.get("/failure", paymentController.failure);

module.exports = paymentRoute