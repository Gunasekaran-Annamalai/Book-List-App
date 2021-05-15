const books = require('./books');

module.exports = class Details {
  static findById(bookId, cb) {
    const book = books.find((b) => b.id == bookId);
    cb(book);
  }
};
