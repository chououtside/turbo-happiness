var db = require('../db');
var Sequelize = require('sequelize');

var MenuItem = db.define('menu_item', {
  category_id: Sequelize.INTEGER,
  name: Sequelize.STRING,
  price: Sequelize.DECIMAL(10, 2),
  precedence: Sequelize.INTEGER

}, {
  timestamps: false
});

module.exports= MenuItem;