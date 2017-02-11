const MenuItem = require('./menuItem/menuItem');
const Category = require('./category/category');
const Restaurant = require('../restaurant/restaurant.js');

module.exports = {
  getAllItems: (req, res) => {
    Restaurant.getMenuItems(req.params.restaurantId)
    .then(menuItems => {
      res.send(menuItems[0]);
      // res.send(menuItems); //Use this line if able to refactor menuItems
    })
  }

};