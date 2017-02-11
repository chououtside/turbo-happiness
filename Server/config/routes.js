const router = require('express').Router();
const restaurantController = require('../restaurant/restaurantController');
const menuController = require('../menu/menuController');

router.get('/api/restaurants', restaurantController.getAll);
router.get('/api/restaurants/:restaurantId/menu', menuController.getAllItems);

module.exports = router;
