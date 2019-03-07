var express = require('express');
 var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./config');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var TrainInfoModel2 = require('./model/traininfo');
var AdminfoModel = require('./model/admin');
var assert = require('assert');
var db = require('./model/datebase');
var LocalModel = require('./model/localapplicationmodel');
var BC = require('./blockchain/trainbcoperation');
var addStudent= require('./action/addlearner').addStudent;
var queryStudent= require('./action/queryStudent').queryStudent;

var certification = require('./action/certification').certification;
const fs = require('fs');
const TextToSVG = require('text-to-svg');
//database connection.
mongoose.connect(config.mongoUrl);
var db = mongoose.connection;

var obi2obi3=JSON.parse("{\"name\":\"imooc\"}");
//"{\"code\":\"200\",\"message\":\"测试数据\",\"data\":{\"imgs\":[\"http://7xw2my.com1.z0.glb.clouddn.com/qiniu/2016-7/0f0b37c0786efa955beec97b56fcda6f.jpg\"],\"kk\":[{\"sdfdsf\":\"sss\"},{\"sdfdsf\":\"ssss\"}]}}"

var  osjdio=JSON.parse("{\"Result\":\"MovePointSuccess\",\"message\":{\"dengji\":\"yiji\",\"neirong\":\"meiguoshuxuejianmo\"}}");
console.log(osjdio);
 //queryStudent(2014014080);
db.on('error',console.error.bind(console, 'connection error: '));
db.once('open',function () {
console.log('Mongoose Server connected.');
console.log('====Query start======');

    
 

})

// routers.
var routes = require('./routes/index');
var users = require('./routes/users');
var test = require('./routes/test');
var check = require('./routes/check');
var query = require('./routes/query');
var login = require('./routes/login');
var move = require('./routes/move');
var apply = require('./routes/apply');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//passport config
var User = require('./model/user');
app.use(passport.initialize());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next){
    res.set('Access-Control-Allow-Origin','*');
    res.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
// use routers.
app.use('/', routes);
app.use('/users', users);
app.use('/test', test);
app.use('/check', check);
app.use('/query', query);
app.use('/login', login);
app.use('/move', move);
app.use('/apply', apply);
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
        res.json({
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: {}
    });
});

module.exports = app;
