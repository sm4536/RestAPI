'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var OrdersSchema = new Schema({
    name: { type: String },
    description: { type : String},
    price: { type: Number},
    created_date: { type: Date, default: Date.now}
});


module.exports = mongoose.model('Orders', OrdersSchema);
