const express = require('express');
const router = express.Router();
const {
  fetchAllCategories,
  createCategory,
} = require('../controllers/category');

router.get('/categories', fetchAllCategories);
router.post('/categories', createCategory);

module.exports = router;
