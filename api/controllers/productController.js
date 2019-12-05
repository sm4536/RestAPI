'use strict';

var mongoose = require('mongoose'),
Products = mongoose.model('Product');


exports.list_all_products = function(req, res) {
  Products.find({}, function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};

exports.create_a_product = function(req, res) {
  console.log("Inside Create Products >>");
  var new_product = new Products(req.body);
  new_product.save(function(err, product) {
    if (err){
      res.send(err);
    } else {
    res.json(product);
  }
  });
};

exports.read_a_product = function(req, res) {
  Products.findById(req.params.productId, function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};

exports.update_a_product = function(req, res) {
  var previousHash;
  Products.findOneAndUpdate({_id: req.params.productId}, req.body, {new: true}, function(err, product) {
    if (err)
      res.send(err);
    else{
      res.json(product);
    }

  });
};

exports.delete_a_product = function(req, res) {
  Products.remove({
    _id: req.params.orderId
  }, function(err, product) {
    if (err)
      res.send(err);
    res.json({ message: 'Products successfully deleted' });
  });
};
