const Recipe = require('../models/recipe');

module.exports = {
  index
};

function index(req, res, next) {
    res.render('recipes/index', {
        title: 'All Recipes',
        user: res.locals.user
    });
}