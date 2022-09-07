const express = require('express');
const router = express.Router();
const { fetchAllCategories } = require('../controllers/category');

router.get('/categories', fetchAllCategories);

module.exports = router;
