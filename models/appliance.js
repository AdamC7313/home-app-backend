const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/home-app');
const Schema = mongoose.Schema;

const applianceSchema = new Schema({
    type: String,
    make: String,
    model: String,
    serial: String
});

module.exports = mongoose.model('Appliance', applianceSchema);
