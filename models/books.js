// const books = [
//   {
//     id: 1,
//     title: 'First book',
//     author: 'Oscar',
//     summary: 'This is a book which has tons of words in it!',
//   },
//   {
//     id: 2,
//     title: 'Second book',
//     author: 'William',
//     summary: 'Book with some kinda story!',
//   },
//   {
//     id: 3,
//     title: 'Shag book',
//     author: 'Sunny',
//     summary: 'The book you always wanted!',
//   },
// ];

// module.exports = books;

const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Books = sequelize.define('book', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  summary: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Books;
