var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Order = require('./api/models/ordersModel')
  Transactions = require('./api/models/Transactions')//created model loading here
  Products = require('./api/models/ProductsModel')
  bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/Ecommerce", { useNewUrlParser: true });


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/ordersRoutes')//importing route
var productRoutes = require('./api/routes/ProductRoutes')

routes(app);
productRoutes(app);//register the route


app.listen(port);


console.log( 'RESTful API server started on: ' + port);
