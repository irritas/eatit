var mongoose = require('mongoose');

var recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  ingredients: {
    type: [String],
    required: true
  },
  description: String,
  rating: {
    type: Number,
    default: 0
  },
  date: {
    Date,
    default: new Date()
  },
  comments: [{
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