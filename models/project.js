const mongoose = require('mongoose');
const shoppingItem = require('./shoppingItem');
mongoose.connect('mongodb://localhost/home-app');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    name: String,
    startDate: String,
    endDate: String,
    notes: String,
    price: Number,
    shoppingList: [{type: mongoose.Schema.Types.ObjectId, ref: shoppingItem }]
});

module.exports = mongoose.model('Project', projectSchema);
