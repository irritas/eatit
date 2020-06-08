var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var recipeSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	ingredients: {
		type: Object,
		required: true
	},
	instructions: {
		type: String,
		required: true
	},
	rating: {
		type: Number,
		default: 0
	},
	date: {
		type: Date,
		default: Date.now
	},
	owner: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: true
	}
}, {
	timestamps: true
});

module.exports = mongoose.model('Recipe', recipeSchema);