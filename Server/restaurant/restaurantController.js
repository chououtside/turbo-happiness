var Restaurant = require('./restaurant');

module.exports = {
  getAll: (req, res) => {
    Restaurant.getAllRestaurants()
    .then(restaurants => {
      res.json(restaurants)
    }
    );
  }
}