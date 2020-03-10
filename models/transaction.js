// Requires
const mongoose = require("mongoose");

// Creation of Schema for Transaction
const schema = new mongoose.Schema({
	category: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "Category"
	},
	name: {
		type: String,
		required: true
	},
	description: {
		type: String
	},
	isExpense: {
		type: Boolean,
		required: true
	},
	value: {
		type: mongoose.Schema.Types.Decimal128,
		required: true
	},
	date: {
		type: Date,
		required: true
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

// Exporting the schema model calling "Transaction"
module.exports = mongoose.model("Transaction", schema);
