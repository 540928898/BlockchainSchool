var express = require('express');
var router = express.Router();
var BC = require('../blockchain/trainbcoperation');
//var queryStudent= require('../action/queryStudent').queryStudent;
/**
Create by Pengu 2018/5/20



*/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/movepoint', function(req,res){
	var IID= req.body;	
    BC.MovePoint(IID,function(err,responce){
    var ResponceJson=JSON.parse(responce);
    //console.log(responce);
    console.log(ResponceJson.success);
            if(err != null){
            	console.log("Query Fail"+err);                  
            }
            else{            
                if(ResponceJson.success==false){  
                	res.send("\"Result\":\"Fale to move point\"");
            		// console.log("The StudentID  not exists: "+JSON.stringify(ResponceJson.message));
            		 //callback(null,JSON.stringify(ResponceJson.message));
            		// callback(null,JSON.stringify(ResponceJson.success));            		  
            	}
            	else{           		
            		//console.log(JSON.stringify(ResponceJson.message));
            		res.send("Move Success!! The txid is "+JSON.stringify(ResponceJson.message));
            		//console.log("The StudentID  not exists: "+JSON.stringify(ResponceJson.message));
            		//console.log("The StudentID already exists");
            		
            		//callback(null,JSON.stringify(ResponceJson.success));
            	}   
            }
        })  
});

module.exports = router;