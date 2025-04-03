require("dotenv").config();

const app = require('express')();

var http = require('http').Server(app);

app.use('/', paymentRoute);

http.listen(3000, function(){
    console.log(`server started at port 3000`);
})