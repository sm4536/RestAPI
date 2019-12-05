'use strict';
module.exports = function(app) {
  var productController = require('../controllers/productController');

  // todoList Routes
  app.route('/products')
    .get(productController.list_all_products)
    .post(productController.create_a_product);


  app.route('/products/:productId')
    .get(productController.read_a_product)
    .put(productController.update_a_product)
    .delete(productController.delete_a_product);
};
