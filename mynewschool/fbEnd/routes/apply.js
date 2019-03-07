var http = require('http');
var express = require('express');
var router = express.Router();
var assert = require('assert');
var moment = require('moment');

//路径需要根据情况修改
var BC = require('../blockchain/trainbcoperation');
var jingsaihuojiang = require('../model/jingsaihuojiang');
var xueshenggongzuo = require('../model/xueshenggongzuo');
var zhiyuangongzuo = require('../model/zhiyuangongzuo');

//学生填写竞赛获奖信息


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/student/jingsaihuojiang',function(req,res,next){
	var body = req.body;

	var app = new jingsaihuojiang({
        xuehao: body.xuehao,       
        name: body.name,            
        class : body.class,
        award_name: body.award_name,
        award_time : body.award_time,
        award_level: body.award_level,
        apply_time:moment().format('YYYY-MM-DD HH:mm:ss'),
        isPass:null
    });

    app.save(function(err,result){
    	assert.equal(err, null);
        console.log("竞赛获奖信息已提交");
        console.log(result);
    });
});

//学生填写学生工作信息
router.post('/student/xueshenggongzuo',function(req,res,next){
	var body = req.body;

	var app = new xueshenggongzuo({
        xuehao: body.xuehao,       
        name: body.name,            
        class : body.class,
        partment: body.partment,
        period : body.period,
        level: body.level,
        apply_time:moment().format('YYYY-MM-DD HH:mm:ss'),
        isPass:null
    });

    app.save(function(err,result){
    	assert.equal(err, null);
        console.log("学生工作信息已提交");
        console.log(result);
    });

    res.json({ status: "学生工作信息已提交" });
});

//填写志愿工作信息
router.post('/student/zhiyuangongzuo',function(req,res,next){
	var body = req.body;

	var app = new zhiyuangongzuo({
        xuehao: body.xuehao,       
        name: body.name,            
        class : body.class,
        partment: body.partment,
        period : body.period,
        level: body.level,
        apply_time:moment().format('YYYY-MM-DD HH:mm:ss'),
        isPass:null
    });

    app.save(function(err,result){
    	assert.equal(err, null);
        console.log("志愿工作信息已提交");
        console.log(result);
    });

    res.json({ status: "志愿工作信息已提交" });
});

//查询竞赛获奖情况
router.post('/jingsai/verify',function(req,res,next){
	jingsaihuojiang.find({"isPass":null},function(err,data){
		if(err == null){
			res.json(data);
		}else{
			console.log(err);
		}

	});
});

//查询学生工作情况
router.post('/xueshenggongzuo/verify',function(req,res,next){
	xueshenggongzuo.find({"isPass":null},function(err,data){
		if(err == null){
			res.json(data);
		}else{
			console.log(err);
		}

	});
});

//查询志愿工作情况
router.post('/zhiyuangongzuo/verify',function(req,res,next){
	zhiyuangongzuo.find({"isPass":null},function(err,data){
		if(err == null){
			res.json(data);
		}else{
			console.log(err);
		}

	});
});

//审核竞赛获奖信息
router.post('/zhiyuangongzuo/verify',function(req,res,next){
	jingsaihuojiang.update({"xuehao":req.body.xuehao},{$set:{"isPass":req.body.isPass}},function(err,data){
		if(err == null){
			res.json(data);
		}else{
			console.log(err);
		}

	});
});

//审核学生工作信息
router.post('/xueshenggongzuo/verify',function(req,res,next){
	xueshenggongzuo.update({"xuehao":req.body.xuehao},{$set:{"isPass":req.body.isPass}},function(err,data){
		if(err == null){
			res.json(data);
		}else{
			console.log(err);
		}

	});
});

//审核学生工作信息
router.post('/zhiyuangongzuo/verify',function(req,res,next){
	zhiyuangongzuo.update({"xuehao":req.body.xuehao},{$set:{"isPass":req.body.isPass}},function(err,data){
		if(err == null){
			res.json(data);
		}else{
			console.log(err);
		}

	});
});


module.exports = router;