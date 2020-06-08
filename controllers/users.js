const Recipe = require('../models/recipe');
const Review = require('../models/review');
const User = require('../models/user');

module.exports = {
	show
};

function show(req, res) {
	User.findById(req.params.id, (err, user) => {
		Recipe.find({ owner: user._id }, (err, recipes) => {
			Review.find({ owner: user._id }, (err, reviews) => {
				res.render('users/show', {
					title: `${user.name}'s Profile`,
					user: res.locals.user,
					recipes,
					reviews
				});
			});
		});
	});
}