const express = require("express");
const paymentRoute = express.Router(); // ✅ Use Router()

const bodyParser = require("body-parser");
const paymentController = require("../controllers/payment.controller"); // ✅ Correct import

// Middleware for parsing JSON and URL-encoded data
paymentRoute.use(bodyParser.json());
paymentRoute.use(bodyParser.urlencoded({ extended: false }));

// ✅ Ensure functions are correctly assigned
paymentRoute.get("/", paymentController.renderBuyPage); // ✅ Works now

module.exports = paymentRoute;
