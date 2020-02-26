// Requires
const express = require('express');

// Getting methods "getPosts, createPost" from the file bellow
//const {getPosts, createPost} = require('../controllers/post');

// Getting methods the files bellow
const postController = require('../controllers/post');
const bookController = require('../controllers/book');

const postValidator = require('../validator/post');
const bookValidator = require('../validator/book');

// Creating a Router
const router = express.Router();

// Creating routes for Posts
router.get('/post/get-all', postController.getAll);
router.get('/post/get/', postController.get);
router.post('/post/create', postValidator.create, postController.create);

// Creating routes for Books
router.get('/book/get-all', bookController.getAll);
router.post('/book/create', bookValidator.create, bookController.create);

// Exporting the Router with the news routes
module.exports = router;