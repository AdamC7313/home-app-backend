const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    name: String,
    startDate: String,
    endDate: String,
    notes: String,
    price: Number
});

module.exports = mongoose.model('Project', projectSchema);
