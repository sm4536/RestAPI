var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Order = require('./api/models/ordersModel')
  Transactions = require('./api/models/Transactions')//created model loading here
  Products = require('./api/models/ProductsModel')
  bodyParser = require('body-parser');



  // const MongoClient = require('mongodb').MongoClient;
  // const uri = "mongodb+srv://sm4536:Phl@6789@cluster0-zyo5s.mongodb.net/Ecommerce?retryWrites=true&w=majority";
  // const client = new MongoClient(uri, { useNewUrlParser: true });
  // client.connect(err => {
  //   const collection = client.db("test").collection("devices");
  //   // perform actions on the collection object
  //   client.close();
  // });


//mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/Ecommerce", { useNewUrlParser: true });


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


var routes = require('./api/routes/ordersRoutes')//importing route
var productRoutes = require('./api/routes/ProductRoutes')

routes(app);
productRoutes(app);//register the route


app.listen(port);


console.log( 'RESTful API server started on: ' + port);
