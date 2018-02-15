const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  id: Number,
	author: String,
	body: String
});

mongoose.model('Project', ProjectSchema);
module.exports = mongoose.model('Project');