var mongoose = require('mongoose');

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
        default: new Date()
    },
    googleId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Review', reviewSchema);