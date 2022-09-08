const Category = require('../models/category');
const createError = require('http-errors');

exports.fetchAllCategories = async (req, res, next) => {
  try {
    const result = await Category.find({});
    if (result.length === 0) {
      return next(createError(404, 'No categories found'));
    }
    res.status(200).json(result);
  } catch (error) {
    console.log('🚀 ~ file: category.js ~ line 8 ', error);
    next(error);
    // res.status(400).json({ error: error.message });
    // next(error); //if we don't use next(error) then the error will not be handled by the error handler middleware
  }
};
