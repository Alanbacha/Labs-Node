// Requires
const express = require('express');

// Getting methods "getPosts, createPost" from the file bellow
const {getPosts, createPost} = require('../controllers/post');

// Getting method createPostValidator from the file bellow
const {createPostValidator} = require('../validator');

// Creating a Router
const router = express.Router();

// Creating a rote for "/"
router.get('/', getPosts);

// Creating a rote for "/post"
router.post('/post', createPostValidator, createPost);

// Exporting the Router with the news routes
module.exports = router;