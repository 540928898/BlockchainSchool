var express = require('express');
var router = express.Router();
var BC = require('../blockchain/trainbcoperation');

/**
Create by Pengu 2018/5/20



*/
//var queryStudent= require('../action/queryStudent').queryStudent;

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/studentlogin', function(req,res){   	
    var data =req.body;
    BC.StudentLogin(data,function(err,responce){
    console.log("responce++++++"+responce);
    var ResponceJson=JSON.parse(responce);
    console.log(ResponceJson.success);
            if(err != null){
            	console.log("Login Fail"+err);                  
            }
            else{            
                if(ResponceJson.success==false){  
                	res.send("\"Result\":\"Fail\",\"message\":\"Wrong PassWord!\"");
            		// console.log("The StudentID  not exists: "+JSON.stringify(ResponceJson.message));
            		 //callback(null,JSON.stringify(ResponceJson.message));
            		// callback(null,JSON.stringify(ResponceJson.success));            		  
            	}
            	else{
            		console.log(JSON.stringify(ResponceJson.message));
            		res.send("{\"QueryStudentResult\":\""+JSON.stringify(ResponceJson.message)+"\"}");
            		//console.log("The StudentID already exists");            		
            		//callback(null,JSON.stringify(ResponceJson.success));
            	}   
            }
        })  
});
router.post('/adminlogin', function(req,res){
	var data =req.body;
    BC.StudentLogin(data,function(err,responce){
    console.log("responce++++++"+responce);
    var ResponceJson=JSON.parse(responce);
    console.log(ResponceJson.success);
            if(err != null){
                console.log("Login Fail"+err);                  
            }
            else{            
                if(ResponceJson.success==false){  
                    res.send("\"Result\":\"Fail\",\"message\":\"Wrong PassWord!\"");
                    // console.log("The StudentID  not exists: "+JSON.stringify(ResponceJson.message));
                     //callback(null,JSON.stringify(ResponceJson.message));
                    // callback(null,JSON.stringify(ResponceJson.success));                   
                }
                else{
                    
                    //console.log(JSON.stringify(ResponceJson.message));
                    res.send("{\"Result\":\"Success\",\"message\":\""+JSON.stringify(ResponceJson.message)+"\"}");
                }   
            }
        })  
});

module.exports = router;