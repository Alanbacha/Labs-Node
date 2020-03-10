// Getting schema "Category" from the file bellow
const Category = require("../models/category");

/**
 * A method to Create Category
 * @param {*} req HTTP request argument to the middleware function, called "req" by convention.
 * @param {*} res HTTP response argument to the middleware function, called "res" by convention.
 */
exports.create = (req, res) => {
	req.body.created = Date.now();
	req.body.updated = Date.now();

	new Category(req.body)
		.save()
		.then(result => res.json({ category: result }))
		.catch(err => {
			console.log(err);
			res.json({ success: false, error: err });
		});
};

/**
 * A method to List Categories
 * @param {*} req HTTP request argument to the middleware function, called "req" by convention.
 * @param {*} res HTTP response argument to the middleware function, called "res" by convention.
 */
exports.list = (req, res) => {
	Category.find()
		.then(categories => res.json({ categories }))
		.catch(err => {
			console.log(err);
			res.json({ success: false, error: err });
		});
};

/**
 * A method to Get a especifique Category
 * @param {*} req HTTP request argument to the middleware function, called "req" by convention.
 * @param {*} res HTTP response argument to the middleware function, called "res" by convention.
 */
exports.get = (req, res) => {
	Category.findOne({ _id: req.params.id })
		.populate("category")
		.then(category => res.json({ category }))
		.catch(err => {
			console.log(err);
			res.json({ success: false, error: err });
		});
};

/**
 * A method to Update Category
 * @param {*} req HTTP request argument to the middleware function, called "req" by convention.
 * @param {*} res HTTP response argument to the middleware function, called "res" by convention.
 */
exports.update = (req, res) => {
	req.body.updated = Date.now();

	Category.findOneAndUpdate({ _id: req.params.id }, req.body, {
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
 * A method to Delete Category
 * @param {*} req HTTP request argument to the middleware function, called "req" by convention.
 * @param {*} res HTTP response argument to the middleware function, called "res" by convention.
 */
exports.delete = (req, res) => {
	Category.findOneAndDelete({ _id: req.params.id })
		.then(result => res.json({ success: result != null, result }))
		.catch(err => {
			console.log(err);
			res.json({ success: false, error: err });
		});
};

/**
 * A method to Delete many Categories
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
