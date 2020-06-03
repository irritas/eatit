var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
	name: String,
	email: String,
	avatar: String,
	liked: [{
		type: Schema.Types.ObjectId,
		ref: 'Recipe'
	}],
	googleId: String
}, {
	timestamps: true
});

module.exports = mongoose.model('User', userSchema);