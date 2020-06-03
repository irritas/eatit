var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var reviewSchema = new mongoose.Schema({
	rating: {
		type: Number,
		required: true
	},
	content: String,
	likes: {
		type: Number,
		default: 0
	},
	date: {
		type: Date,
		default: Date.now
	},
	owner: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	}
}, {
	timestamps: true
});

module.exports = mongoose.model('Review', reviewSchema);