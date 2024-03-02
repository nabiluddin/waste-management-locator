const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: String,
    points: Number
}, {
    timestamps:true
});

const Users = mongoose.model('User', userSchema);

module.exports = Users;
