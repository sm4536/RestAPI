'use strict';
module.exports = function(app) {
  var orderController = require('../controllers/ordersController');

  // todoList Routes
  app.route('/orders')
    .get(orderController.list_all_orders)
    .post(orderController.create_an_order);


  app.route('/orders/:orderId')
    .get(orderController.read_a_order)
    .put(orderController.update_a_order)
    .delete(orderController.delete_a_order);
};
