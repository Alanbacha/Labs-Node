// Requires
const mongoose = require('mongoose');

// Creation of Schema for Posts
const postSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	body: {
		type: String,
		required: true
	}
});

// Exporting the schema model calling "Post"
module.exports = mongoose.model("Post", postSchema);