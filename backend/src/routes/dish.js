const express = require('express');
const router = express.Router();
const { createDish } = require('../controllers/dish');

// router.get();
router.post('/dishes', createDish);
// router.param('id', );
// router.get('/dish/:id', );

module.exports = router;
