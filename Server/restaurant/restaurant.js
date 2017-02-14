const db = require('../config/db');
const Sequelize = require('sequelize');
const Category = require('../menu/category/category');
const MenuItem = require('../menu/menuItem/menuItem')

const Restaurant = db.define('restaurant', {
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

Restaurant.hasMany(Category, {
  foreignKey: 'restaurant_id',
  constraints: false
});

Category.belongsTo(Restaurant, {
  foreignKey: 'restaurant_id',
  constraints: false
});

Restaurant.sync();

Restaurant.getAllRestaurants = () => Restaurant.findAll()


//watch out for sql injection
Restaurant.getMenuItems = (restaurantId) =>
  db.query(`SELECT C.name as "category", ME.name, ME.price, ME.precedence FROM menu_items AS ME, categories AS C WHERE category_id IN (SELECT C.id FROM categories as C WHERE restaurant_id = ${restaurantId}) AND ME.category_id = C.id ORDER BY C.precedence ASC, ME.precedence ASC;`);

// //Sequelize version of getMenuItems still needs refactoring to get it to work
// Restaurant.getMenuItems = (restaurantId) =>
//   MenuItem.findAll({
//     where: {
//       category_id: {
//         $in: [1, 2, 3]  //NEED TO FIND A WAY TO GET THIS SQL QUERY IN AND IT WILL WORK. COULD USE PROMISE AND THEN STATEMENT
//       }
//     },
//     include: [{
//       model: Category,
//       required: true
//     }],
//     order: [[Category, 'precedence', 'ASC'], ['precedence', 'ASC']]
//   })

module.exports = Restaurant;