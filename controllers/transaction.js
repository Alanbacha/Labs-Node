// Getting schema "Transaction" from the file bellow
const Transaction = require("../models/transaction");

/**
 * A method to Create Transaction
 * @param {*} req HTTP request argument to the middleware function, called "req" by convention.
 * @param {*} res HTTP response argument to the middleware function, called "res" by convention.
 */
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

/**
 * A method to List Transactions
 * @param {*} req HTTP request argument to the middleware function, called "req" by convention.
 * @param {*} res HTTP response argument to the middleware function, called "res" by convention.
 */
exports.list = (req, res) => {
	Transaction.find()
		.then(transactions => res.json({ transactions }))
		.catch(err => {
			console.log(err);
			res.json({ success: false, error: err });
		});
};

/**
 * A method to Get a especifique Transaction
 * @param {*} req HTTP request argument to the middleware function, called "req" by convention.
 * @param {*} res HTTP response argument to the middleware function, called "res" by convention.
 */
exports.get = (req, res) => {
	Transaction.findOne({ _id: req.params.id })
		.populate("category")
		.then(transaction => res.json({ transaction }))
		.catch(err => {
			console.log(err);
			res.json({ success: false, error: err });
		});
};

/**
 * A method to Update Transaction
 * @param {*} req HTTP request argument to the middleware function, called "req" by convention.
 * @param {*} res HTTP response argument to the middleware function, called "res" by convention.
 */
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

/**
 * A method to Delete Transaction
 * @param {*} req HTTP request argument to the middleware function, called "req" by convention.
 * @param {*} res HTTP response argument to the middleware function, called "res" by convention.
 */
exports.delete = (req, res) => {
	Transaction.findOneAndDelete({ _id: req.params.id })
		.then(result => res.json({ success: result != null, result }))
		.catch(err => {
			console.log(err);
			res.json({ success: false, error: err });
		});
};

/**
 * A method to Delete many Transactions
 * @param {*} req HTTP request argument to the middleware function, called "req" by convention.
 * @param {*} res HTTP response argument to the middleware function, called "res" by convention.
 */
exports.deleteMany = (req, res) => {
	Category.deleteMany({ _id: { $in: req.body.ids } })
		.then(result => res.json({ success: result != null && result.n > 0 && result.n == result.deletedCount, result }))
		.catch(err => {
			console.log(err);
			res.json({ success: false, error: err });
		});
};
