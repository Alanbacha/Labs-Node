// Getting schema "Transaction" from the file bellow
const Transaction = require("../models/transaction");

// A method to Create Transaction
exports.create = (req, res) => {
	req.body.created = Date.now();
	req.body.updated = Date.now();

	new Transaction(req.body)
		.save()
		.then(result => res.json({ transaction: result }))
		.catch(err => {
			console.log(err);
			res.json({ success: false, error: err });
		});
};

// A method to List Transactions
exports.list = (req, res) => {
	Transaction.find()
		.select() // requiring only these fields
		.then(transactions => res.json({ transactions }))
		.catch(err => {
			console.log(err);
			res.json({ success: false, error: err });
		});
};

// A method to Get a especifique Transaction
exports.get = (req, res) => {
	Transaction.findOne({ _id: req.params.id })
		.select() // requiring only these fields
		.then(transaction => res.json({ transaction }))
		.catch(err => {
			console.log(err);
			res.json({ success: false, error: err });
		});
};

// A method to Update Transaction
exports.update = (req, res) => {
	req.body.updated = Date.now();

	Transaction.findOneAndUpdate({ _id: req.params.id }, req.body, {
		new: true,
		upsert: true
	})
		.then(result => res.json({ success: result != null, result }))
		.catch(err => {
			console.log(err);
			res.json({ success: false, error: err });
		});
};

// A method to Delete Transaction
exports.delete = (req, res) => {
	Transaction.findOneAndDelete({ _id: req.params.id })
		.then(result => res.json({ success: result != null, result }))
		.catch(err => {
			console.log(err);
			res.json({ success: false, error: err });
		});
};

// A method to Delete many Transactions
exports.deleteMany = (req, res) => {
	Category.deleteMany({ _id: { $in: req.body.ids } })
		.then(result => res.json({ success: result != null && result.n > 0 && result.n == result.deletedCount, result }))
		.catch(err => {
			console.log(err);
			res.json({ success: false, error: err });
		});
};
