'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var OrdersSchema = new Schema({
    name: { type : String },
    email: { type : String },
    address: { type : String },
    phoneNumber: { type : String },
    createdDate: { type: Date, default: Date.now},
    itemName: { type: String},
    itemPrice: { type: String}
});


module.exports = mongoose.model('Orders', OrdersSchema);
