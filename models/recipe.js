var mongoose = require('mongoose');
const Schedma = mongoose.Schema;

var recipeSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	image: String,
	ingredients: {
		type: [String],
		required: true
	},
	instructions: String,
	rating: {
		type: Number,
		default: 0
	},
	date: {
		type: Date,
		default: Date.now
	},
	reviews: [{
		type: Schema.Types.ObjectId,
		ref: 'Comment'
	}],
	owner: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	}
}, {
	timestamps: true
});

module.exports = mongoose.model('Recipe', recipeSchema);