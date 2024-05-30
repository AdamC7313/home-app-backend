const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/home-app');
const Schema = mongoose.Schema;

const shoppingItemSchema = new Schema({
    name: String,
    quantity: Number,
    price: Number
})

module.exports = mongoose.model('shoppingItem', shoppingItemSchema)