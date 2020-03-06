// Requires
const mongoose = require("mongoose");

// Creation of Schema for Category
const schema = new mongoose.Schema({
	category: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Category"
	},
	name: {
		type: String,
		required: true
	},
	description: {
		type: String
	},
	created: {
		type: Date
	},
	updated: {
		type: Date
	},
	deleted: {
		type: Date
	}
});

// Exporting the schema model calling "Category"
module.exports = mongoose.model("Category", schema);
