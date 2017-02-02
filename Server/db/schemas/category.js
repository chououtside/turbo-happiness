var db = require('../db');
var Sequelize = require('sequelize');

var Category = db.define('category', {
  restaurant_id: Sequelize.INTEGER,
  name: Sequelize.STRING,
  precedence: Sequelize.INTEGER

}, {
  timestamps: false
});

module.exports= Category;