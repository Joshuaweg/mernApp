const mongoose = require('mongoose');

// Replace 'yourDatabaseName' with the name of your database
const uri = 'mongodb://127.0.0.1:27017/FirstDatabase';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connection successful');
    mongoose.disconnect(); // Cleanly disconnect after success
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });