const express = require('express');
const app = express();
const mongoose = require('mongoose')
const cors = require("cors");
const bodyParser = require('body-parser')
require("dotenv").config();
const multer = require('multer')

const path = require('path');
//add cors
app.use(cors());
//parse json file
app.use(bodyParser.json());
/*import routes*/
//import from route
const productRoute = require('./routes/product.js');
const usersRoute = require('./routes/users');
const historyRoute = require('./routes/history')
const home = require('./routes/testHome')
// middelware
app.use('/product', productRoute,);
app.use('/users', usersRoute,);
app.use('/history', historyRoute,);
app.use('/', home)


// const usersRoute= require('./routes/users');
// app.use('/users',usersRoute);


//Import routestest
// const testHomeRoute = require('./routes/testHome.js');
// app.use('/', testHomeRoute)
//connect to db

mongoose.connect("mongodb+srv://khaled:lital@litalerp.z9tiy.mongodb.net/litaldb?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("connected to db")
})
//listen
app.listen('5000')



app.use(express.static('./public'));


app.get('/', (req, res) => res.send('index'));
// Set The Storage Engine
const storage = multer.diskStorage({
    destination: './public',
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});


// Check File Type
function checkFileType(file, cb) {
    // Allowed ext
    const filetypes = /jpeg|jpg|png|gif/;
    // Check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // Check mime
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: Images Only!');
    }
}

// Init Upload
const upload = multer({
    storage: storage,
    limits: { fileSize: 3000000 },
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    }
}).single('file');

app.post('/image', (req, res) => {
    console.log()
    upload(req, res, (err) => {
        if (err) {
            res.send({ msg: err });
        } else {
            if (req.file == undefined) {
                res.send({ msg: 'Error: No File Selected!' });
            } else {
                res.send(req.file.filename)
            }
        }

    });
});

