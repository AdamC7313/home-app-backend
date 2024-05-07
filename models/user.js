const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: Number,
    name: String,
    email: String,
    password: String,
    role: String,
    tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }],
    projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }],
    appliances: [{ type: Schema.Types.ObjectId, ref: 'Appliance' }]
});

module.exports = mongoose.model('User', userSchema);