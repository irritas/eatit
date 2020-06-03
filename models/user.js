var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
	name: String,
	email: String,
	avatar: String,
	recipes: [{
		type: Schema.Types.ObjectId,
		ref: 'Recipe'
	}],
	likes: [{
		type: Schema.Types.ObjectId,
		ref: 'Recipe'
	}],
	comments: [{
		type: Schema.Types.ObjectId,
		ref: 'Comment'
	}],
	googleId: String
}, {
	timestamps: true
});

module.exports = mongoose.model('User', userSchema);