require('dotenv').config();
const mongoose = require('mongoose');

console.log('MONGO_URI:', process.env.MONGO_URI); 

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

module.exports = connectToDB;
