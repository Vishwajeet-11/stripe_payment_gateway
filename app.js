const express = require("express");
const app = express();
const path = require("path");
const paymentRoute = require("./routes/payment.route");

// ✅ Set view engine here
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // Correct view path

// ✅ Mount the payment routes
app.use("/payment", paymentRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
