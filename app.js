var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser=require('body-parser');

var emailRouter = require('./routes/email.routes');
var verifyRouter= require('./routes/verify.routes');


var app = express();
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/email', emailRouter);
app.use('/',verifyRouter);


module.exports = app;
