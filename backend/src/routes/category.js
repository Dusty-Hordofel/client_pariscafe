const express = require('express');
const router = express.Router();
const {
  fetchAllCategories,
  createCategory,
  getCategoryId,
  getCategory,
} = require('../controllers/category');

router.get('/categories', fetchAllCategories);
router.post('/categories', createCategory);
router.param('id', getCategoryId);
router.get('/categories/:id', getCategory);

module.exports = router;
