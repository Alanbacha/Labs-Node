// Validation before create a new Book
exports.create = (req, res, next) =>{
	
	// title
	req.check('title', 'Write a title').notEmpty();
	req.check('title', 'Title must be between 4 to 150 characters').isLength({min:4, max: 150});

	// body
	req.check('body', 'Write a body').notEmpty();
	req.check('body', 'Body must be between 4 to 2000 characters').isLength({min:4, max: 2000});

	// check for errors
	const errors = req.validationErrors();
	
	// if error show the first one as they happen
	if (errors){
		const firstError = errors.map((error) => error.msg)[0]
		
		return res.status(400).json({success: false, error: firstError})
	}
	
	// proceed to next middleware
	next();
}

// Validation before delete a Post
exports.update = (req, res, next) =>{
	
	// _id
	req.check('id', 'id is required').notEmpty();

	// title
	req.check('title', 'Write a title').notEmpty();
	req.check('title', 'Title must be between 4 to 150 characters').isLength({min:4, max: 150});

	// body
	req.check('body', 'Write a body').notEmpty();
	req.check('body', 'Body must be between 4 to 2000 characters').isLength({min:4, max: 2000});

	// check for errors
	const errors = req.validationErrors();
	
	// if error show the first one as they happen
	if (errors){
		const firstError = errors.map((error) => error.msg)[0]
		
		return res.status(400).json({success: false, error: firstError})
	}
	
	// proceed to next middleware
	next();
}

// Validation before delete a Post
exports.delete = (req, res, next) =>{
	
	// _id
	req.check('id', 'id is required').notEmpty();

	// check for errors
	const errors = req.validationErrors();
	
	// if error show the first one as they happen
	if (errors){
		const firstError = errors.map((error) => error.msg)[0]
		
		return res.status(400).json({success: false, error: firstError})
	}
	
	// proceed to next middleware
	next();
}