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

//var certification = require('./action/certification').certification;
var images = require("images");
const fs = require('fs');
const TextToSVG = require('text-to-svg');
const svg2png = require("svg2png");
const Promise = require('bluebird');
// database connection.
// mongoose.connect(config.mongoUrl);
// var db = mongoose.connection;


 queryStudent(2014014080);
db.on('error',console.error.bind(console, 'connection error: '));
db.once('open',function () {
console.log('Mongoose Server connected.');
console.log('====Query start======');

    
   // // console.log("asdsad"+ss);

   //  var QueryStudent222 = setTimeout(function(){new queryStudent(2014014086)
   //       },1000);
    
    // var AddStudent1 = setTimeout(function(){new addStudent({
    //                 StudentID:"2014014082",    // xuehao
    //                 mailbox: "540928898@qq.com",  //youxiang
    //                 institution: "InfomationAndScience",//xueyuan
    //                 position: "Automation"     //zhuanye
    //          })
    //      },1000);

//     TrainInfoModel2.find(function(err,docs){
//         //if(docs.length == 0){
//  if(true){
// /************************增加学员 第一期*******************************/
// /************************增加学员 第一期*******************************/
    	 //    var newLearner = setTimeout(function(){new addStudent({
				  //   StudentID:"2014014083",    // xuehao

      //               mailbox: "540928898@qq.com",  //youxiang
      //               institution: "InfomationAndScience",//xueyuan
      //               position: "Automation"     //zhuanye
    	 //   		})
    		// },1000);   	            
// /***************************************************************/
// /***************************************************************/
//         }

// 	});


// Query StudentID if exist


// BC.QueryStudent(2014014080,function(err,responce){
//     var ResponceJson=JSON.parse(responce);
//             if(err == null){
//                 console.log("The StudentID : "+parseInt(ResponceJson.message.Student2)+" already exits");
//             }
//             else{
//                 console.log("The StudentID not exist,you can creat it!");
//             }

//         })   
            // var traininfo_1 =new TrainInfoModel2({
            //             txid: "1231",
            //             StudentID: "431",
            //             mailbox: "123",  //youxiang
            //             institution: "d123",//xueyuan
            //             position: "432" 
            //                         });
            //             console.log(traininfo_1)

            //             traininfo_1.save(function(err,doc1){
            //             console.log(doc1)
            //             console.log("I am saving in mongodb")
            //             //console.log("txid:"+bianhao+doc1.txid);
                                        
            //                         })  

// var traininfo_1 =new TrainInfoModel2({
//                         txid: "1232",
//                         StudentID: "431",
//                         mailbox: "123",  //youxiang
//                         institution: "d123",//xueyuan                        
//                                     });
//                         console.log(traininfo_1)
            
//                         traininfo_1.save(function(err,doc1){
//                         console.log(doc1)
//                         console.log("I am saving in mongodb")
//                         //console.log("txid:"+bianhao+doc1.txid);                                        
//                                     }) 
// });
// TrainInfoModel2.find(function(err,docs){
//     if(docs.length == 0){
//         console.log("There is no exsits");
//     }
//     else{
//         console.log("There have existed");

//     }

})

// routers.
var routes = require('./routes/index');
var users = require('./routes/users');
var test = require('./routes/test');
var check = require('./routes/check');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
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
