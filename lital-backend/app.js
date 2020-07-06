const express=require('express');
const app= express();
const mongoose=require('mongoose')
const bodyParser= require('body-parser')

//parse json file
app.use(bodyParser.json());
//import routes
//import product route
const productRoute= require('./routes/product.js');

app.use('/product',productRoute);


//Import routestest
const testHomeRoute= require('./routes/testHome.js');
app.use('/',testHomeRoute)
//connect to db
mongoose.connect('mongodb+srv://khaled:simplonp2@clusterlital.7lpsq.mongodb.net',{ useNewUrlParser: true },()=>{
    console.log("connected to db")
})
//listen
app.listen('3000')