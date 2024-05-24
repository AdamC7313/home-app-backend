const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/home-app');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    name: String,
    due: String,
    reccuring: Boolean,
    reccuringInterval: Number,
    reccuringUnit: String,
    reccuringEndDate: String,
    reccuringCount: Number,
    reccuringDays: [String],
    reccuringMonths: [String],
    reccuringYears: Number,
    reccuringWeeks: Number
});

module.exports = mongoose.model('Task', taskSchema);