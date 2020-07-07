const express = require('express');
const app = express();
const mongoose = require('mongoose')
require('dotenv/config')
const bodyParser = require('body-parser')

//parse json file
app.use(bodyParser.json());
//import routes
//import from route
const productRoute = require('./routes/product.js');
const usersRoute = require('./routes/users');
const historyRoute= require('./routes/history')

// mid
app.use('/product', productRoute,);
app.use('/users', usersRoute,);
app.use('/history', historyRoute,);


// const usersRoute= require('./routes/users');
// app.use('/users',usersRoute);


//Import routestest
// const testHomeRoute = require('./routes/testHome.js');
// app.use('/', testHomeRoute)
//connect to db

mongoose.connect(process.env.URI, { useNewUrlParser: true,useUnifiedTopology: true }, () => {
    console.log("connected to db")
})
//listen
app.listen('4000')