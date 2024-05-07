const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    name: String,
    startDate: String,
    endDate: String,
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