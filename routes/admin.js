const express = require('express');

const router = express.Router();

const adminController = require('../controllers/admin');

router.get('/add-book', adminController.getAddBook);

router.post('/add-book', adminController.postAddBook);

router.post('/details', adminController.getBookDetails);

router.get('/delete-book/:bookId', adminController.getDeleteBook);

router.get('/', adminController.getBooks);

module.exports = router;
