const { check, validationResult } = require("express-validator");

/**
 * Check attribute category
 * @param {*} req HTTP request argument to the middleware function, called "req" by convention.
 */
const checkAttributeCategory = (req) => {
	if (req.body.category) {
		// Requires
		const mongoose = require("mongoose");

		// Getting schema "Transaction" from the file bellow
		const Category = require("../models/category");

		req.check("category")
			.notEmpty()
			.withMessage("Choose a category")
			.custom((value) => {
				if (mongoose.isValidObjectId(value)) {
					return Category.findOne({ _id: value })
						.select()
						.then((result) => {
							if (result == null) {
								throw new Error();
							}
						});
				} else {
					return false;
				}
			})
			.withMessage("This category id is not valid or does not exist");
	}
};

/**
 * Check attribute ids
 * @param {*} req HTTP request argument to the middleware function, called "req" by convention.
 */
const checkAttributeIds = (req) => {
	req.check("ids").isArray().withMessage("list of ids is required");
};

/**
 * Check attribute id
 * @param {*} req HTTP request argument to the middleware function, called "req" by convention.
 */
const checkAttributeId = (req) => {
	req.check("id").notEmpty().withMessage("id is required");
};

/**
 * Check attribute name
 * @param {*} req HTTP request argument to the middleware function, called "req" by convention.
 */
const checkAttributeName = (req) => {
	req.check("name").notEmpty().withMessage("Write a name").isLength({ min: 4, max: 150 }).withMessage("the name must be between 4 to 150 characters");
};

/**
 * Check attribute description
 * @param {*} req HTTP request argument to the middleware function, called "req" by convention.
 */
const checkAttributeDescription = (req) => {
	if (req.body.description) {
		req.check("description").isLength({ min: 4, max: 150 }).withMessage("The description must be between 4 to 150 characters");
	}
};

/**
 * Check for errors
 * @param {*} req HTTP request argument to the middleware function, called "req" by convention.
 * @param {*} res HTTP response argument to the middleware function, called "res" by convention.
 * @param {*} next Callback argument to the middleware function, called "next" by convention.
 */
const checkForErros = (req, res, next) => {
	req.asyncValidationErrors()
		.then((result) => {
			// Proceed to next middleware
			next();
		})
		.catch((errors) => {
			console.log("b");
			// if error show the first one as they happen
			if (errors) {
				const firstError = errors.map((error) => error.msg)[0];
				console.log("c");
				return res.status(400).json({ success: false, error: firstError });
			}
		});
};

/**
 * Validation before create a new Category
 * @param {*} req HTTP request argument to the middleware function, called "req" by convention.
 * @param {*} res HTTP response argument to the middleware function, called "res" by convention.
 * @param {*} next Callback argument to the middleware function, called "next" by convention.
 */
exports.create = (req, res, next) => {
	// Check attributes
	checkAttributeCategory(req);
	checkAttributeName(req);
	checkAttributeDescription(req);

	// Check errors
	checkForErros(req, res, next);
};

/**
 * Validation before update a Category
 * @param {*} req HTTP request argument to the middleware function, called "req" by convention.
 * @param {*} res HTTP response argument to the middleware function, called "res" by convention.
 * @param {*} next Callback argument to the middleware function, called "next" by convention.
 */
exports.update = (req, res, next) => {
	// Check attributes
	checkAttributeId(req);
	checkAttributeCategory(req);
	checkAttributeName(req);
	checkAttributeDescription(req);

	// Check errors
	checkForErros(req, res, next);
};

/**
 * Validation before delete a Category
 * @param {*} req HTTP request argument to the middleware function, called "req" by convention.
 * @param {*} res HTTP response argument to the middleware function, called "res" by convention.
 * @param {*} next Callback argument to the middleware function, called "next" by convention.
 */
exports.delete = (req, res, next) => {
	// Check attributes
	checkAttributeId(req);

	// Check errors
	checkForErros(req, res, next);
};

/**
 * Validation before delete many Categories
 * @param {*} req HTTP request argument to the middleware function, called "req" by convention.
 * @param {*} res HTTP response argument to the middleware function, called "res" by convention.
 * @param {*} next Callback argument to the middleware function, called "next" by convention.
 */
exports.deleteMany = (req, res, next) => {
	// Check attributes
	checkAttributeIds(req);

	// Check errors
	checkForErros(req, res, next);
};
