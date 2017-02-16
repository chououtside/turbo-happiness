const Test = require('./schemas/test');
const Restaurant = require('./schemas/restaurant');
const Category = require('./schemas/category');
const MenuItem = require('./schemas/menuItem');

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