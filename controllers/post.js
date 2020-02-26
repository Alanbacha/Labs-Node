// Getting schema "Post" from the file bellow
const Post = require('../models/post');

// Creating a method to Get Posts
exports.getAll = (req, res) => {
	const posts = Post.find().select("_id title body") // requiring only these fields
	.then(posts => {res.json({posts})})
	.catch(err => console.log(err))
	;
};

// Creating a method to Get a especifique Post
exports.get = (req, res) => {
	const post = Post.findById(req.query._id).select("_id title body") // requiring only these fields
	.then(post => {res.json({post})})
	.catch(err => console.log(err))
	;
};

// Creating a method to Create Posts
exports.create = (req, res) => {
	const post = new Post(req.body);
	post.save().then(result =>{res.json({post:result})})
};