const Category = require('../models/category');
const createError = require('http-errors');
const { categorySchema } = require('../validators/schema-validator');
const mongoose = require('mongoose');

exports.fetchAllCategories = async (req, res, next) => {
  try {
    const result = await Category.find({});
    if (result.length === 0) {
      return next(createError(404, 'No categories found'));
    }
    res.status(200).json(result);
  } catch (error) {
    console.log('🚀 ~ file: category.js ~ line 8 ', error);
    next(error); //if we don't use next(error) then the error will not be handled by the error handler middleware
    // res.status(400).json({ error: error.message });
  }
};

exports.createCategory = async (req, res, next) => {
  try {
    const schema = await categorySchema.validateAsync(req.body);
    const category = new Category(schema); //req.body will contain the data that we send from the frontend
    // const category = new Category(req.body); //req.body will contain the data that we send from the frontend
    category.addedBy = 'Lolita';
    const result = await category.save(); // save the data in the database
    res.status(201).json(result); //201 means created, so we send the result
  } catch (error) {
    console.log('🚀 ~ file: category.js ~ line 26 ', error);
    if (error.isJoi === true) {
      error.status = 422;
    }

    if (error.message.includes('duplicate key error')) {
      return next(
        createError.Conflict(`Category name ${req.body.name} already exists`)
      );
    } //if error message includes duplicate key error then we send a conflict error

    next(createError(error));
    // res.status(400).json({ error: error.message });
    // next(error); //if we don't use next(error) then the error will not be handled by the error handler middleware
  } //otherwise we send the error
  //   res.status(201).json({ message: 'create category' });
};

exports.getCategory = (req, res) => {
  res.status(200).json(req.category);
};

exports.getCategoryId = async (req, res, next, id) => {
  try {
    const category = await Category.findById(id);
    if (!category) return next(createError(404, 'Category not found'));

    req.category = category;
    next();
  } catch (error) {
    console.log(
      '🚀 ~ file: category.js ~ line 61 ~ exports.getCategoryId=async ~ error',
      error
    );

    if (error instanceof mongoose.CastError) {
      return next(createError(400, 'Invalid Category Id'));
    }

    next(error);
  }
};
