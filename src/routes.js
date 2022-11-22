const { Router } = require('express');

const BookController = require('./controllers/BookController');

const router = Router();

router.get('/books', BookController.listBooks);
router.get('/books/:id', BookController.getBookById);


module.exports = router;