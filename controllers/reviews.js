const Recipe = require('../models/recipe');
const Review = require('../models/review');
const User = require('../models/user');

module.exports = {
	create
};

function create(req, res) {
	Recipe.findById(req.params.id, (err, recipe) => {
		req.body.owner = res.locals.user;
		req.body.recipe = recipe;
		req.body.title = recipe.title;
        const review = new Review(req.body);
        review.save(err => {
            if (err) return;
            res.redirect(`/recipes/${req.params.id}`);
		});
    });
}