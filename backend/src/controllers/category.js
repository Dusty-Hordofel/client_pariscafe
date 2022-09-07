const Category = require('../models/category');

exports.fetchAllCategories = async (req, res) => {
  try {
    const result = await Category.find({});
    res.status(200).json(result);
  } catch (error) {
    console.log(
      '🚀 ~ file: category.js ~ line 8 ~ exports.fetchAllCategories= ~ error',
      error
    );
    res.status(400).json({ error: error.message });
  }
};
