var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');

var indexRouter = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api', indexRouter);

mongoose.connect('mongodb://mongo:27017/test').then(() => {
	console.log("Connected to database")
}).catch(err => {
	console.log(err);
});

module.exports = app;
