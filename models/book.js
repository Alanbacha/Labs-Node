// Requires
const mongoose = require('mongoose');

// Creation of Schema for Books
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

// Exporting the schema model calling "Book"
module.exports = mongoose.model("Book", schema);