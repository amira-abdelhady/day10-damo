var express = require('express')
var app = express()
var mongoose = require('mongoose')
var bodyParser = require('body-parser')

var Product = require('./ProductController')
// var productController = new productControllerClass()
//mongo altals
 
mongoose
  .connect(' ')
  .then(() => {
    console.log('Connected to database!')
  })
  .catch(() => {
    console.log('Connection failed!')
  })

  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
  });  

app.use(bodyParser.urlencoded({ extended: false }))

// app.get('/', function (req, res) {
//   res.sendFile(__dirname + '/' + 'Index.html')
// })

app.get('/getProducts', function (reg, res) { 
   Product.find() 
   .then((data) => {
    console.log(data);
    res.send(data)
  })
})

// app.get('/add', function (req, res) {
//   res.sendFile(__dirname + '/' + 'AddProduct.html')
// })

app.post('/insert', function (req, res) {
  let producttoinserted = new Product({
    Name: req.body.Name,
    Price: req.body.Price,
    Quantity: req.body.Quantity,
  })

  producttoinserted.save().then(() => {
    console.log('Inserted')
    res.redirect('/')
  })
})

app.listen(3000, function () {
  console.log('Example app listening...')
})
