const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const applianceSchema = new Schema({
    type: String,
    make: String,
    model: String
});

module.exports = mongoose.model('Appliance', applianceSchema);
