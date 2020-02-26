// Requires
const mongoose = require('mongoose');

// Creation of Schema for Posts
const schema = new mongoose.Schema({
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
module.exports = mongoose.model("Post", schema);