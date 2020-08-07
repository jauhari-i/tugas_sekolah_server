const express = require('express');
const app = express();
const bp = require('body-parser');
const cors = require('cors');
const log = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();

const { port, dbUrl } = require('../constants/constants');

app.use(cors());
app.use(log('dev'));

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

mongoose.connect(
  dbUrl,
  {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Connected to tugas database');
    }
  }
);

app.get('/', (req, res) => {
  res.redirect('/v1');
});
app.use('/v1', require('../routes/apiV1'));

app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  res.status(404).json({
    message: req.method + ' ' + req.url + ' not found',
    error: 'NoEndpointExist',
    code: 404,
  });
  next();
});

app.listen(port, () => console.log(`Server Tugas on port ${port}!`));
