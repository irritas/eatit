var mongoose = require('mongoose');

var recipeSchema = new mongoose.Schema({
  title: String,
  ingredients: [String],
  description: String,
  likes: Number,
//   comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
  googleId: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Recipe', recipeSchema);