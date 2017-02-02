var db = require('../db');
var Sequelize = require('sequelize');

var Restaurant = db.define('restaurant', {
  name: Sequelize.STRING,
  opening_time: Sequelize.STRING,
  closing_time: Sequelize.STRING,
  phone_number: Sequelize.STRING,
  delivery_fee: Sequelize.DECIMAL(10, 2),
  delivery_radius: Sequelize.DECIMAL,
  street_address: Sequelize.STRING,
  city: Sequelize.STRING,
  state: Sequelize.STRING,
  zipcode: Sequelize.STRING
}, {
  timestamps: false
});

module.exports= Restaurant;