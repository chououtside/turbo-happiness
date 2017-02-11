const db = require('../../config/db');
const Sequelize = require('sequelize');
const MenuItem = require('../menuItem/menuItem');

const Category = db.define('category', {
  restaurant_id: Sequelize.INTEGER,
  name: Sequelize.STRING,
  precedence: Sequelize.INTEGER

}, {
  timestamps: false
});

Category.hasMany(MenuItem, {
  foreignKey: 'category_id',
  constraints: false
});

MenuItem.belongsTo(Category, {
  foreignKey: 'category_id',
  constraints: false
});

Category.sync();
MenuItem.sync();

module.exports = Category;