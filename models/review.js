var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var reviewSchema = new mongoose.Schema({
	rating: {
		type: Number,
		required: true
	},
	content: String,
	title: String,
	rating: {
		type: Number,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	},
	owner: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: true
	},
	recipe: {
		type: Schema.Types.ObjectId,
		ref: 'Recipe'
	}
}, {
	timestamps: true
});

module.exports = mongoose.model('Review', reviewSchema);