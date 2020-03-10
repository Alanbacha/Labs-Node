// Requires
const express = require("express");

// Getting methods "getPosts, createPost" from the file bellow
//const {getPosts, createPost} = require('../controllers/post');

// Getting methods the files bellow
const categoryController = require("../controllers/category");
const transactionController = require("../controllers/transaction");

const categoryValidator = require("../validator/category");
const transactionValidator = require("../validator/transaction");

// Creating a Router
const router = express.Router();

// Creating routes for Categories
router.post("/category", categoryValidator.create, categoryController.create);
router.get("/category", categoryController.list);
router.get("/category/:id", categoryController.get);
router.put("/category/:id", categoryValidator.update, categoryController.update);
router.delete("/category/:id", categoryValidator.delete, categoryController.delete);
router.delete("/category", categoryValidator.deleteMany, categoryController.deleteMany);

// Creating routes for Transactions
router.post("/transaction", transactionValidator.create, transactionController.create);
router.get("/transaction", transactionController.list);
router.get("/transaction/:id", transactionController.get);
router.put("/transaction/:id", transactionValidator.update, transactionController.update);
router.delete("/transaction/:id", transactionValidator.delete, transactionController.delete);
router.delete("/transaction", transactionValidator.deleteMany, transactionController.deleteMany);

// Exporting the Router with the news routes
module.exports = router;
