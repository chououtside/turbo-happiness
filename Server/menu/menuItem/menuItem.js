const db = require('../../config/db');
const Sequelize = require('sequelize');

const MenuItem = db.define('menu_item', {
  category_id: Sequelize.INTEGER,
  name: Sequelize.STRING,
  price: Sequelize.DECIMAL(10, 2),
  precedence: Sequelize.INTEGER

}, {
  timestamps: false
});

MenuItem.sync();

module.exports = MenuItem;