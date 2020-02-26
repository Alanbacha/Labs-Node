// Getting schema "Post" from the file bellow
const Post = require('../models/post');

// A method to Create Posts
exports.create = (req, res) => {
	new Post(req.body)
	.save()
	.then(result =>res.json({post:result}))
	.catch(err => {console.log(err); res.json({"success": false, error: err})})
	;
};

// A method to List Posts
exports.list = (req, res) => {
	Post.find().select("_id title body") // requiring only these fields
	.then(posts => res.json({posts}))
	.catch(err => {console.log(err); res.json({"success": false, error: err})})
	;
};

// A method to Get a especifique Post
exports.get = (req, res) => {
	Post.findById(req.query._id).select("_id title body") // requiring only these fields
	.then(post => res.json({post}))
	.catch(err => {console.log(err); res.json({"success": false, error: err})})
	;
};

// A method to Update Post
exports.update = (req, res) => {
	Post.findByIdAndUpdate(req.query._id, req.body, {new: true, upsert: true })
	.then(result =>res.json({"success": result != null}))
	.catch(err => {console.log(err); res.json({"success": false, error: err})})
	;
};

// A method to Delete Post
exports.delete = (req, res) => {
	Post.findByIdAndRemove(req.query._id)
	.then(result => res.json({"success": result != null}))
	.catch(err => {console.log(err); res.json({"success": false, error: err})})
	;
};