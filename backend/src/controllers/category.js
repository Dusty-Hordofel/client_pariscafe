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

exports.createCategory = async (req, res, next) => {
  try {
    const category = new Category(req.body); //req.body will contain the data that we send from the frontend
    category.addedBy = 'Lolita';
    const result = await category.save(); // save the data in the database
    res.status(201).json(result); //201 means created, so we send the result
  } catch (error) {
    console.log('🚀 ~ file: category.js ~ line 26 ', error);
    if (error.message.includes('duplicate key error')) {
      return next(
        createError.Conflict(`Category name ${req.body.name} already exists`)
      );
    }

    next(createError(error));
    // res.status(400).json({ error: error.message });
    // next(error); //if we don't use next(error) then the error will not be handled by the error handler middleware
  }
  //   res.status(201).json({ message: 'create category' });
};
