const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  name: String,
  address: String,
  latitude: Number,
  longitude: Number
}, {
  timestamps:true
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;