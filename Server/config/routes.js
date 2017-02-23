const router = require('express').Router();
const restaurantController = require('../restaurant/restaurantController');
const menuController = require('../menu/menuController');
const path = require('path');

router.get('/api/restaurants', restaurantController.getAll);
router.get('/api/restaurants/:restaurantId/menu', menuController.getAllItems);
router.get('*', (req, res) => res.sendFile(path.join(__dirname, '../..', 'Client', 'index.html')));

module.exports = router;
