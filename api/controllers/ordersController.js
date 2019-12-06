'use strict';

var mongoose = require('mongoose'),
Orders = mongoose.model('Orders');


exports.list_all_orders = function(req, res) {
  Orders.find({}, function(err, orders) {
    if (err)
      res.send(err);
    res.json(orders);
  });
};

exports.create_an_order = function(req, res) {

  var new_order = new Orders(req.body);
  new_order.save(function(err, order) {
    if (err){
      res.send(err);
    } else {
    res.json(order);
  }
  });
};

exports.read_a_order = function(req, res) {
  Orders.findById(req.params.orderId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.update_a_order = function(req, res) {
  var previousHash;
  Orders.findOneAndUpdate({_id: req.params.orderId}, req.body, {new: true}, function(err, order) {
    if (err)
      res.send(err);
    else{
      res.json(order);
    }

  });
};

exports.delete_a_order = function(req, res) {
  Orders.remove({
    _id: req.params.orderId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Order successfully deleted' });
  });
};
