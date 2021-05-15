const Sequelize = require('sequelize');

const sequelize = new Sequelize('project-2', 'root', 'heartless_coder', {
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = sequelize;
