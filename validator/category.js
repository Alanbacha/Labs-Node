// Validation before create a new Category
exports.create = (req, res, next) => {
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

// Validation before update a Category
exports.update = (req, res, next) => {
	// _id
	req.check("id", "id is required").notEmpty();

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

// Validation before delete a Category
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

// Validation before delete many Categories
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
