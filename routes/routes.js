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
router.post('/post', postValidator.create, postController.create);
router.get('/post', postController.list);
router.get('/post/:id', postController.get);
router.put('/post/:id', postValidator.update, postController.update);
router.delete('/post/:id', postValidator.delete, postController.delete);

// Creating routes for Books
router.post('/book', bookValidator.create, bookController.create);
router.get('/book', bookController.list);
router.get('/book/:id', bookController.get);
router.post('/book/:id', bookValidator.update, bookController.update);
router.delete('/book/:id', bookValidator.delete, bookController.delete);

// Exporting the Router with the news routes
module.exports = router;