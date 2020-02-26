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
router.post('/post/create', postValidator.create, postController.create);
router.get('/post/list', postController.list);
router.get('/post/get/', postController.get);
router.post('/post/update', postValidator.update, postController.update);
router.delete('/post/delete', postValidator.delete, postController.delete);

// Creating routes for Books
router.post('/book/create', bookValidator.create, bookController.create);
router.get('/book/list', bookController.list);
router.get('/book/get', bookController.get);
router.post('/book/update', bookValidator.update, bookController.update);
router.delete('/book/delete', bookValidator.delete, bookController.delete);

// Exporting the Router with the news routes
module.exports = router;