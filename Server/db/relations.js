var Test = require('./schemas/test');
var Restaurant = require('./schemas/restaurant');
var Category = require('./schemas/category');
var MenuItem = require('./schemas/menuItem');

Restaurant.hasMany(Category, {
  foreignKey: 'restaurant_id'
});

Category.belongsTo(Restaurant, {
  foreignKey: 'restaurant_id'
});

Category.hasMany(MenuItem, {
  foreignKey: 'category_id'
});

MenuItem.belongsTo(Category, {
  foreignKey: 'category_id'
});


Restaurant.sync();
Category.sync();
MenuItem.sync();
Test.sync();

module.exports.Test = Test;
module.exports.Restaurant = Restaurant;
module.exports.Category = Category;
module.exports.MenuItem = MenuItem;