let books = require('../mocks/books');

class BookController {
    listBooks(req, res) {
        res.status(200).send(books);
    }

    getBookById(req, res) {
        const { id } = req.params;

        const book = books.find((book) => book.id === Number(id));

        if (!book) {
            return res.send(400, { error: 'Book not found' });
        };

        res.status(200).send(book);
    }
}

module.exports = new BookController();