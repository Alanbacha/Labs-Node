// Getting schema "Book" from the file bellow
const Book = require('../models/book');

// A method to Get Books
exports.getAll = (req, res) => {
	const books = Book.find().select("_id title body") // requiring only these fields
	.then(books => res.json({books}))
	.catch(err => console.log(err))
	;
};

// A method to Get a especifique Book
exports.get = (req, res) => {
	const book = Book.findById(req.query._id).select("_id title body") // requiring only these fields
	.then(book => res.json({book}))
	.catch(err => console.log(err))
	;
};

// A method to Create Books
exports.create = (req, res) => {
	const book = new Book(req.body);
	book.save()
	.then(result =>res.json({book:result}))
	;
};

// A method to Delete Book
exports.delete = (req, res) => {
	Book.findByIdAndRemove(req.query._id)
	.then(result =>res.json({"success": result != null}))
	;
};