const Recipe = require('../models/recipe');

module.exports = {
	index,
	new: newRecipe
};

function index(req, res, next) {
	res.render('recipes/index', {
		title: 'All Recipes',
		user: res.locals.user
	});
}

function newRecipe(req, res) {
	res.render('recipes/new', {
		title: 'Add New Recipe',
		user: res.locals.user
	});
}