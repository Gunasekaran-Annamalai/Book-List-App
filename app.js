const express = require('express');
const path = require('path');

const sequelize = require('./util/database');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const { patch } = require('./routes/admin');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(adminRoutes);

sequelize
  .sync()
  .then(() => {
    console.log('TABLE CREATED');
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000);
