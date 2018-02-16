const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  id: Number,
	author: String,
	body: String
});

mongoose.model('Comment', CommentSchema);
module.exports = mongoose.model('Comment');