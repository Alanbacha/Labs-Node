// Getting schema "Book" from the file bellow
const Book = require('../models/book');

// A method to Create Books
exports.create = (req, res) => {
	new Book(req.body)
	.save()
	.then(result =>res.json({book:result}))
	.catch(err => {console.log(err); res.json({"success": false, error: err})})
	;
};

// A method to List Books
exports.list = (req, res) => {
	Book.find().select("_id title body") // requiring only these fields
	.then(books => res.json({books}))
	.catch(err => {console.log(err); res.json({"success": false, error: err})})
	;
};

// A method to Get a especifique Book
exports.get = (req, res) => {
	Book.findOne({"_id" : req.params.id}).select("_id title body") // requiring only these fields
	.then(book => res.json({book}))
	.catch(err => {console.log(err); res.json({"success": false, error: err})})
	;
};

// A method to Update Book
exports.update = (req, res) => {
	Book.findOneAndUpdate({"_id" : req.params.id}, req.body, {new: true, upsert: true })
	.then(result =>res.json({"success": result != null}))
	.catch(err => {console.log(err); res.json({"success": false, error: err})})
	;
};

// A method to Delete Book
exports.delete = (req, res) => {
	Book.findOneAndDelete({"_id" : req.params.id})
	.then(result => res.json({"success": result != null}))
	.catch(err => {console.log(err); res.json({"success": false, error: err})})
	;
};