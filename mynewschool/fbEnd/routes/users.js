var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../model/user');
var Verify    = require('./verify');
var mongoose = require('mongoose');
var config = require('../config');
var db = require('../model/datebase');
var TrainInfoModel = require('../model/traininfo');
var AdminfoModel = require('../model/admin');
var VerifyCode = require('../model/verifycode');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/register', function(req, res) {
    console.log("phone: " + req.body.phone);
    User.register(new User({ username : req.body.phone,role: req.body.role}),req.body.password, function(err, user) {
            if (err) {
                res.set('Access-Control-Allow-Origin','*');
                return res.status(500).json({err: err});
            }
            passport.authenticate('local')(req, res, function () {
                res.set('Access-Control-Allow-Origin','*');
                // var code = new VerifyCode({
                //     phone: req.body.phone,
                //     verifyCode: "a123456",
                //     balance: req.body.balance,
                //     password: req.body.password
                // });
                // code.save(function (err, doc) {
                //     if(err != null){
                //         console.log("save verify code failed");
                //     }
                //     console.log(doc);
                // });
                return res.status(200).json({status: 'Registration Successful!'});
            });
        });
});

router.post('/login', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
        if (err) {
            return next(err);
        }
        if (!user) {
            // res.set('Access-Control-Allow-Origin','*');
            return res.status(401).json({
                err: info
            });
        }
        req.logIn(user, function(err) {
            if (err) {
                // res.set('Access-Control-Allow-Origin','*');
                return res.status(500).json({
                    err: 'Could not log in user'
                });
            }

            console.log(user);
        // if (user.role=="1"){
        //     //查询学员的id并返回学员信息，第二个参数为需要返回的值
        //     TrainInfoModel.find({'phone': user.username}, ['bianhao', 'name', 'term', 'phone', 'mailbox','institution','position','trainTime','authenTime'], function (err, docs) {
        //         console.log(docs);
        //         // res.set('Access-Control-Allow-Origin','*');
        //         VerifyCode.findOne({"phone": user.username},function (err, doc) {
        //             console.log("ymy"+doc)
        //             //返回的数据部分
        //             if(docs.length == 0){
        //                 res.status(200).json({res:"没有您的信息!"});
        //             }else{
        //                 res.status(200).json({
        //                     id: user._id,
        //                     bianhao:docs[0].bianhao,
        //                     role: user.role,
		// 	    verifyCode: doc.verifyCode,
        //                     status: 'Login successful!',
        //                     //docs为json数组
        //                     data: docs,
        //                     success: true
        //                 });                        
        //             }
        //         });
        //     });}
            if(user.role=="2"){
            AdminfoModel.find({'phone': user.username}, ['bianhao', 'name', 'phone'], function (err, docs) {
                console.log(docs);
                // res.set('Access-Control-Allow-Origin','*');
                VerifyCode.findOne({"phone": user.username},function (err, doc) {
                    res.status(200).json({
                        id: user._id,
                        username: user.username,
                        role: user.role,
                        status: 'Login successful!',
			verifyCode: doc.verifyCode,
                        data: docs,
                        success: true
                    });
                });
            });

            }
        });
    })(req,res,next);
});

router.post('/changeverifycode', function (req, res, next) {
   TrainInfoModel.findOneAndUpdate({phone: req.body.phone,verifyCode:req.body.oldVerifyCode}, {$set: {verifyCode: req.body.newVerifyCode}},{new:true}, function (err, doc) {
       if(err == null){
           console.log(doc);
       }
       res.json(doc);
   }) 
});

router.post('/getverifycode', function (req, res, next) {
    VerifyCode.findOne({"username": req.body.username}, function (err, doc) {
        if(err == null)
            res.json(doc);
    })
});

router.get('/getverifycode', function (req, res, next) {
    VerifyCode.find(function (err, docs) {
        if(err == null)
            res.json(docs);
    })
});

router.post('/getpwd', function (req, res, next) {
    VerifyCode.findOne({"phone": req.body.phone}, function (err, doc) {
        if(err == null){
            if(doc != null){
                res.json({password:doc.password});         
            }else{
                res.json({password:"未注册账户密码"});
            }
        }
    })
});

router.get('/logout', function(req, res) {
    req.logout();
    res.status(200).json({
        status: 'Bye!'
    });
});

module.exports = router;
