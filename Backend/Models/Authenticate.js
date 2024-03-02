const mongoose = require('mongoose');

const authenticateSchema = new mongoose.Schema({
    email: String,
    item: String,
    isSubmitted: Boolean,
    points:Number,
    count:Number
}, {
    timestamps:true
});

const Authenticate = mongoose.model('Authenticate', authenticateSchema);

module.exports = Authenticate;
