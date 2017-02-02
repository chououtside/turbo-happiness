var db = require('../db');
var Sequelize = require('sequelize');

var Test = db.define('test', {
  first_name: Sequelize.TEXT,
  last_name: Sequelize.TEXT,
  test_price: Sequelize.DECIMAL(10, 2),
  test_decimal0: Sequelize.DECIMAL
}, {
  timestamps: false
});

module.exports= Test;