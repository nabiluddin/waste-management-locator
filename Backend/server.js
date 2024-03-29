const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
const LocationRoute = require('./routes/LocationRoute');
const AddEmail = require('./routes/AddEmail');

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://nabilmsedge:noLArZyx1po2wtpf@eshopcluster0.mm42rtp.mongodb.net/ew', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>
console.log('coon'));

const db = mongoose.connection;
app.use('/location', LocationRoute);
app.use('/addEmail', AddEmail);

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

db.once('disconnected', () => {
  console.log('Disconnected from MongoDB');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
