const Dish = require('../models/dish');
const createError = require('http-errors');
const { dishSchema } = require('../validators/schema-validator');
const mongoose = require('mongoose');

const imageTypes = ['image/jpg', 'image/jpeg', 'image/png', 'image/gif'];

exports.createDish = async (req, res, next) => {
  const { name, description, price, category, photo } = req.body; //we are getting the data from the body of the request

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

    savePhoto(dish, photo); //to save the photo
    const result = await dish.save(); //to save the dish in the database
    result.photo = undefined;
    res.status(201).json(result); //to send the result

    console.log(
      '🚀 ~ file: dish.js ~ line 26 ~ exports.createDish= ~ result',
      result
    );
  } catch (error) {
    console.log(
      '🚀 ~ file: dish.js ~ line 21 ~ exports.createDish= ~ error',
      error
    );
  }
  //   res.status(201).json({ message: 'Dish created successfully' });
};

function savePhoto(dish, photo) {
  //TODO: Handle empty object scenario using lodash

  if (photo != null && imageTypes.includes(photo.type)) {
    dish.photo.data = new Buffer.from(photo.data, 'base64');
    dish.photo.contentType = photo.type;
  } //to  save the photo in the database
}
//lodash is used for handling empty objects
