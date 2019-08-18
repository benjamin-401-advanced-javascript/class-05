'use strict';

const mongoose = require('mongoose');
// Require your model
const Categories = require('./models-singular/categories');

// Mongoose Server URI
const MONGOOSE_URI = 'mongodb://localhost:27017/class05';

// Connect
mongoose.connect(MONGOOSE_URI, { useNewUrlParser: true });

// Do some work
const categories = new Categories();
categories.create({
  name: 'Benjamin Clark',
  description: 'test test test',
})
  .then(returnedCat => console.log(returnedCat))
  .catch(error => console.log('MYERROR', error));

// Disconnect
// mongoose.disconnect();