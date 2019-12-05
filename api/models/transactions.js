'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TransactionSchema = new Schema({
  orderId: {type: mongoose.Schema.Types.ObjectId, ref: 'Orders'},
  previousHash: { type: String},
  type: { type: String},
  hash: { type: String},
  createdDate: { type: Date, default: Date.now}
});


module.exports = mongoose.model('Transactions', TransactionSchema);
