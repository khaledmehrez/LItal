const express = require('express');
const app = express();
const mongoose = require('mongoose')
const cors = require("cors");
const bodyParser = require('body-parser')
require("dotenv").config();

//add cors
app.use(cors());
//parse json file
app.use(bodyParser.json());
                   /*import routes*/
//import from route
const productRoute = require('./routes/product.js');
const usersRoute = require('./routes/users');
const historyRoute= require('./routes/history')
const home=require('./routes/testHome')
// middelware
app.use('/product', productRoute,);
app.use('/users', usersRoute,);
app.use('/history', historyRoute,);
app.use('/',home)


// const usersRoute= require('./routes/users');
// app.use('/users',usersRoute);


//Import routestest
// const testHomeRoute = require('./routes/testHome.js');
// app.use('/', testHomeRoute)
//connect to db

mongoose.connect("mongodb+srv://khaled:lital@litalerp.z9tiy.mongodb.net/litaldb?retryWrites=true&w=majority", { useNewUrlParser: true,useUnifiedTopology: true }, () => {
    console.log("connected to db")
})
//listen
app.listen('5000')