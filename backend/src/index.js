const express = require('express');
const morgan = require('morgan');
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

const port = process.env.PORT || 4112;
app.listen(port, () => {
  console.log(`Server is runing on port ${port}`);
});
