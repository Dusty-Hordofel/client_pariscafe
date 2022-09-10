const express = require('express');
const router = express.Router();
const {
  createDish,
  fetchDishes,
  fetchDish,
  fetchDishById,
} = require('../controllers/dish');

// router.get();
router.post('/dishes', createDish);
router.get('/dishes', fetchDishes);
router.param('id', fetchDish);

router.get('/dishes/:id', fetchDishById);
// router.param('id', );
// router.get('/dish/:id', );

module.exports = router;
