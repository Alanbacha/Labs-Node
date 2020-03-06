// Validation before create a new Transaction
exports.create = (req, res, next) => {
	// category
	req.check("category")
		.notEmpty()
		.withMessage("Choose a category");

	// name
	req.check("name")
		.notEmpty()
		.withMessage("Write a name")
		.isLength({ min: 4, max: 150 })
		.withMessage("the name must be between 4 to 150 characters");

	// description
	if (req.body.description) {
		req.check("description")
			.isLength({ min: 4, max: 150 })
			.withMessage("The description must be between 4 to 150 characters");
	}

	// isExpense
	req.check("isExpense")
		.not()
		.isBoolean()
		.withMessage("You need to set if this transaction is an expense or not");

	// value
	req.check("value")
		.notEmpty()
		.withMessage("You need to inform a value of the transaction")
		.not()
		.isDecimal()
		.withMessage("The value must be greater then 0");

	// check for errors
	const errors = req.validationErrors();

	// if error show the first one as they happen
	if (errors) {
		const firstError = errors.map(error => error.msg)[0];

		return res.status(400).json({ success: false, error: firstError });
	}

	// proceed to next middleware
	next();
};

// Validation before update a Transaction
exports.update = (req, res, next) => {
	// _id
	req.check("id", "id is required").notEmpty();

	// category
	req.check("category")
		.notEmpty()
		.withMessage("Choose a category");

	// name
	req.check("name")
		.notEmpty()
		.withMessage("Write a name")
		.isLength({ min: 4, max: 150 })
		.withMessage("the name must be between 4 to 150 characters");

	// description
	if (req.body.description) {
		req.check("description")
			.isLength({ min: 4, max: 150 })
			.withMessage("The description must be between 4 to 150 characters");
	}

	// isExpense
	req.check("isExpense")
		.not()
		.isBoolean()
		.withMessage("You need to set if this transaction is an expense or not");

	// value
	req.check("value")
		.notEmpty()
		.withMessage("You need to inform a value of the transaction")
		.not()
		.isDecimal()
		.withMessage("The value must be greater then 0");

	// check for errors
	const errors = req.validationErrors();

	// if error show the first one as they happen
	if (errors) {
		const firstError = errors.map(error => error.msg)[0];

		return res.status(400).json({ success: false, error: firstError });
	}

	// proceed to next middleware
	next();
};

// Validation before delete a Transaction
exports.delete = (req, res, next) => {
	// _id
	req.check("id", "id is required").notEmpty();

	// check for errors
	const errors = req.validationErrors();

	// if error show the first one as they happen
	if (errors) {
		const firstError = errors.map(error => error.msg)[0];

		return res.status(400).json({ success: false, error: firstError });
	}

	// proceed to next middleware
	next();
};

// Validation before delete many Transactions
exports.deleteMany = (req, res, next) => {
	// _id
	req.check("ids", "id is required").notEmpty();

	// check for errors
	const errors = req.validationErrors();

	// if error show the first one as they happen
	if (errors) {
		const firstError = errors.map(error => error.msg)[0];

		return res.status(400).json({ success: false, error: firstError });
	}

	// proceed to next middleware
	next();
};
