// Getting schema "Post" from the file bellow
const Post = require('../models/post');

// Creating a method to Get Posts
exports.getPosts = (req, res) => {
	const posts = Post.find().select("_id title body") // requiring only these fields
	.then(posts => {res.json({posts})})
	.catch(err => console.log(err))
	;
};

// Creating a method to Create Posts
exports.createPost = (req, res) => {
	const post = new Post(req.body);
	post.save().then(result =>{res.json({post:result})})
};