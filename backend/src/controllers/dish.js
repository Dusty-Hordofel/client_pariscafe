const Dish = require('../models/dish');
const createError = require('http-errors');
const { dishSchema } = require('../validators/schema-validator');
const mongoose = require('mongoose');

const imageTypes = ['image/jpg', 'image/jpeg', 'image/png', 'image/gif'];

exports.createDish = async (req, res, next) => {
  const { name, description, price, category, photo } = req.body; //we are getting the data from the body of the request
  console.log(req.body);
  let dish;
  try {
    const schema = await dishSchema.validateAsync({
      name,
      description,
      price,
      category,
    }); //to validate the data
    dish = new Dish(schema); //to create a new dish
    dish.addedBy = 'Owner';

    savePhoto(dish, photo); //to save the photo
    const newDish = await dish.save(); //to save the dish in the database
    newDish.photo = undefined;
    res.status(201).json(newDish); //to send the result
  } catch (error) {
    console.log(
      '🚀 ~ file: dish.js ~ line 19 ~ exports.createDish= ~ error',
      error
    );
    if (error.isJoi === true) {
      console.log(
        '🚀 ~ file: dish.js ~ line 108 ~ exports.searchByCategory= ~ error',
        error
      );
      console.log(
        '🚀 ~ file: dish.js ~ line 108 ~ exports.searchByCategory= ~ error',
        error
      );
      error.status = 422;
    }

    if (error.message.includes('E11000')) {
      return next(createError.Conflict(`The dish ${dish.name} already exists`));
    }

    next(error);
  }
  // res.status(201).json({ message: 'Dish created successfully' });
};

function savePhoto(dish, photo) {
  //TODO: Handle empty object scenario using lodash

  if (photo != null && imageTypes.includes(photo.type)) {
    dish.photo.data = new Buffer.from(photo.data, 'base64');
    dish.photo.contentType = photo.type;
  } //to  save the photo in the database
}
//lodash is used for handling empty objects
