const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const createError = require('http-errors');
const dotenv = require('dotenv');
const categoryRoutes = require('./routes/category');
const dishRoutes = require('./routes/dish');

const app = express(); // Create Express app
dotenv.config(); //to use .env file

//Middleware
app.use(morgan('dev')); //to see the requests in the console
app.use(cors()); //to allow cross-origin requests
app.use(express.json()); //to parse json data
app.use(express.urlencoded({ extended: false }));
// app.use('/api', require('./routes'));

const PORT = process.env.PORT || 4112;
const DATABASE = process.env.DATABASE;
const PREFIX = process.env.PREFIX;

app.use(PREFIX, categoryRoutes);
app.use(PREFIX, dishRoutes);
// we can also use this synthax: app.use(`/${PREFIX}/categories`, categoryRoute);

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello World' });
});

app.listen(PORT, async () => {
  console.log(`Server is runing on port ${PORT}`);
  try {
    await mongoose.connect(DATABASE);
    console.log('Connected to mongoDB');
  } catch (error) {
    console.log('🚀 ~ file: index.js ~ line 29 ~ app.listen ~ error', error);
  }
});

app.use(async (req, res, next) => {
  next(createError.NotFound());
}); //if we don't use next(error) then the error will not be handled by the error handler middleware

app.use((err, req, res, next) => {
  // res.status = err.status || 500;
  // console.log(err.status);

  res.status(err.status || 500).json({
    error: {
      status: err.status || 500,
      message: err.message || 'Internal Server Error',
    },
  });
}); //it will handle all the errors
