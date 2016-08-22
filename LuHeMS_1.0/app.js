var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var config = require("./config_default");
var login = require('./routes/login');
var routes = require('./routes/index');
var users = require('./routes/users');
var base_info = require('./routes/base_manage/base_info');
var base_config = require('./routes/base_manage/base_config');
var base_control = require('./routes/base_manage/base_control');
var base_log = require('./routes/base_manage/base_log');
var chart = require('./routes/chart');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser(config.session_secret));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret : config.session_secret,
  cookie : {maxAge : 2*60*60*1000},
  resave: false,
  saveUninitialized: false
}));
app.use('/',login);
app.use('/index', routes);
app.use('/users', users);
app.use('/base_manage/base_info',base_info);
app.use('/base_manage/base_config',base_config);
app.use('/base_manage/base_control',base_control);
app.use('/base_manage/base_log',base_log);
app.use('/chart',chart);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
