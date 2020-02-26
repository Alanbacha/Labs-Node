// Getting schema "Book" from the file bellow
const Book = require('../models/book');

// Creating a method to Get Books
exports.getAll = (req, res) => {
	const books = Book.find().select("_id title body") // requiring only these fields
	.then(books => {res.json({books})})
	.catch(err => console.log(err))
	;
};

// Creating a method to Create Books
exports.create = (req, res) => {
	const book = new Book(req.body);
	book.save().then(result =>{res.json({book:result})})
};