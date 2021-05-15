const Books = require('../models/books');

exports.getAddBook = (req, res, next) => {
  res.render('add-book', {
    pageTitle: 'Add Book',
  });
};

exports.postAddBook = (req, res, next) => {
  Books.create({
    title: req.body.title,
    author: req.body.author,
    summary: req.body.summary,
  })
    .then(() => {
      console.log('BOOK INSERTED');
      res.redirect('/');
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getBookDetails = (req, res, next) => {
  const bookId = req.body.id;
  Books.findByPk(bookId)
    .then((book) => {
      res.render('details', {
        pageTitle: book.title,
        book: book,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getBooks = (req, res, next) => {
  Books.findAll()
    .then((books) => {
      res.render('index', {
        books: books,
        pageTitle: 'Books',
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getDeleteBook = (req, res, next) => {
  const bookId = req.params.bookId;
  console.log(bookId);
  Books.findByPk(bookId)
    .then((book) => {
      return book.destroy();
    })
    .then(() => {
      console.log('DELETION SUCCESS');
      res.redirect('/');
    })
    .catch((err) => {
      console.log(err);
    });
};
