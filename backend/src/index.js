const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express(); // Create Express app
dotenv.config(); //to use .env file

//Middleware
app.use(morgan('dev')); //to see the requests in the console
app.use(cors()); //to allow cross-origin requests
app.use(express.json()); //to parse json data
app.use(express.urlencoded({ extended: false }));
// app.use('/api', require('./routes'));

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello World' });
});

const PORT = process.env.PORT || 4112;
const DATABASE = process.env.DATABASE;

app.listen(PORT, async () => {
  console.log(`Server is runing on port ${PORT}`);
  try {
    await mongoose.connect(DATABASE);
    console.log('Connected to mongoDB');
  } catch (error) {
    console.log('🚀 ~ file: index.js ~ line 29 ~ app.listen ~ error', error);
  }
});
