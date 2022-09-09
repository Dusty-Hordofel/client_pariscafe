const Dish = require('../models/dish');
const createError = require('http-errors');
const { dishSchema } = require('../validators/schema-validator');
const mongoose = require('mongoose');

exports.createDish = async (req, res, next) => {
  const { name, description, price, category } = req.body; //we are getting the data from the body of the request

  console.log(req.body);

  try {
    const schema = await dishSchema.validateAsync({
      name,
      description,
      price,
      category,
    }); //to validate the data
    const dish = new Dish(schema); //to create a new dish
    dish.addedBy = 'Olivier';

    const result = await dish.save(); //to save the dish in the database
    res.status(201).json(result); //to send the result
  } catch (error) {
    console.log(
      '🚀 ~ file: dish.js ~ line 21 ~ exports.createDish= ~ error',
      error
    );
  }
  //   res.status(201).json({ message: 'Dish created successfully' });
};
