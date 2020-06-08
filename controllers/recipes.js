const Recipe = require('../models/recipe');
const Review = require('../models/review');
const User = require('../models/user');

module.exports = {
	index,
	new: newRecipe,
	show,
	create,
	delete: deleteRecipe
};

function index(req, res, next) {
	// let sortKey = "date";
	// let reverse = true;
	// switch(req.query.sort) {
	// 	case "title" :
	// 		sortKey = "title";
	// 		reverse = false;
	// 		break;
	// 	case "title-r" :
	// 		sortKey = "title";
	// 		break;
	// 	case "date" :
	// 		sortKey = "date";
	// 		reverse = false;
	// 		break;
	// 	case "rating" :
	// 		sortKey = "rating";
	// }
	Recipe.find({})
		.sort("rating").populate('User').exec((err, recipes) => {
			if (err) return next(err);
			recipes.reverse();
			res.render('recipes/index', {
				title: 'All Recipes',
				user: res.locals.user,
				name: req.query.name,
				recipes
			});
		});
}

function newRecipe(req, res) {
	res.render('recipes/new', {
		title: 'Add New Recipe',
		user: res.locals.user
	});
}

function show(req, res) {
	Recipe.findById(req.params.id)
		.populate('User').exec((err, recipe) => {
			User.findById(recipe.owner, (err, owner) => {
				Review.find({recipe: recipe._id}, function(err, reviews) {
					let sum = reviews.reduce((acc, cur) => {
						return acc += cur.rating;
					}, 0);
					recipe.rating = sum / reviews.length;
					recipe.save();
					res.render('recipes/show', {
						title: recipe.title,
						user: res.locals.user,
						recipe,
						owner,
						reviews
					});
				});
				
			});
		});
}

function create(req, res) {
	req.body.owner = res.locals.user;
	let ingredients = {};
	req.body.ingredients.split(/\s*\n\s*/).forEach(p => {
		const pair = p.split(/\s*,\s*/);
		if (pair[0] && pair[1]) ingredients[pair[0]] = pair[1];
	});
	req.body.ingredients = ingredients;
	const recipe = new Recipe(req.body);
	recipe.save((err) => {
		if (err) return res.redirect('/recipes/new');
		res.redirect(`/recipes/${recipe._id}`);
	});
}

function deleteRecipe(req, res) {
	Recipe.findByIdAndRemove(req.params.id, recipe => {
	  	res.redirect('/recipes');
	});
}