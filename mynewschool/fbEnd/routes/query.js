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
router.post('/student', function(req,res){
	var IID= req.body.args;
	console.log("asda++"+IID)
    BC.QueryStudent(IID,function(err,responce){
    var ResponceJson=JSON.parse(responce);
    console.log(ResponceJson.success);
            if(err != null){
            	console.log("Query Fail"+err);                  
            }
            else{            
                if(ResponceJson.success==false){  
                	res.send("\"Result\":\"The StudentID  not exists!!\"");
            		// console.log("The StudentID  not exists: "+JSON.stringify(ResponceJson.message));
            		 //callback(null,JSON.stringify(ResponceJson.message));
            		// callback(null,JSON.stringify(ResponceJson.success));            		  
            	}
            	else{
            		ResponceJson.message.password="*****"
            		console.log(JSON.stringify(ResponceJson.message));
            		res.send("{\"QueryStudentResult\":\""+ResponceJson.message.money+"\"}");
            		//console.log("The StudentID already exists");
            		
            		//callback(null,JSON.stringify(ResponceJson.success));
            	}   
            }
        })  
});

router.post('/admin', function(req,res){
	var IID= req.body.args;
	console.log("asda++"+IID)
    BC.QueryStudent(IID,function(err,responce){
    var ResponceJson=JSON.parse(responce);
    console.log(ResponceJson.success);
            if(err != null){
            	console.log("Query Fail"+err);                  
            }
            else{            
                if(ResponceJson.success==false){  
                	res.send("\"Result\":\"The AdminID  not exists!!\"");
            		// console.log("The StudentID  not exists: "+JSON.stringify(ResponceJson.message));
            		 //callback(null,JSON.stringify(ResponceJson.message));
            		// callback(null,JSON.stringify(ResponceJson.success));            		  
            	}
            	else{
            		ResponceJson.message.password="*****"
            		console.log(JSON.stringify(ResponceJson.message));
            		res.send("{\"QueryAdminResult\":\""+JSON.stringify(ResponceJson.message)+"\"}");
            		//console.log("The StudentID already exists");           		
            		//callback(null,JSON.stringify(ResponceJson.success));
            	}   
            }
        })  
});
router.post('/historylist', function(req,res){
    var IID= req.body.args;
    console.log("asda++"+IID)
    BC.Historylist(IID,function(err,responce){
    var ResponceJson=JSON.parse(responce);
    console.log(ResponceJson.success);
            if(err != null){
                console.log("Query Fail"+err);                  
            }
            else{            
                if(ResponceJson.success==false){  
                    res.send("\"Result\":\"The AdminID  not exists!!\"");
                    // console.log("The StudentID  not exists: "+JSON.stringify(ResponceJson.message));
                     //callback(null,JSON.stringify(ResponceJson.message));
                    // callback(null,JSON.stringify(ResponceJson.success));                   
                }
                else{
                    console.log("MYjsfjo");
                    console.log(typeof ResponceJson.message); 
                    console.log(ResponceJson.message.length);
                    console.log(JSON.stringify(ResponceJson.message));
                    res.send("{\"QueryAdminResult\":\""+JSON.stringify(ResponceJson.message)+"\"}");
                    //console.log("The StudentID already exists");                   
                    //callback(null,JSON.stringify(ResponceJson.success));
                }   
            }
        })  
});
router.post('/txid', function(req,res){
    var IID= req.body.args;
    console.log("asda++"+IID)
    BC.TxidQuery(IID,function(err,responce){
     console.log("responce type");   
    console.log(typeof responce);
    var ResponceJson=JSON.parse(responce);
    console.log("ResponceJson type");   
    console.log(typeof ResponceJson);
    //console.log(ResponceJson.success);
            if(err != null){
                console.log("Query Fail"+err);                  
            }
            else{            
                if(ResponceJson.success==false){  
                    res.send("\"Result\":\"The txid  not exists!!\"");
                    // console.log("The StudentID  not exists: "+JSON.stringify(ResponceJson.message));
                     //callback(null,JSON.stringify(ResponceJson.message));
                    // callback(null,JSON.stringify(ResponceJson.success));                   
                }
                else{
                    console.log("mymymy++"+JSON.stringify(ResponceJson.action.ns_rwset[0].rwset.writes[0].value));
                    console.log("mymymy++"+JSON.stringify(ResponceJson));
                    if(JSON.stringify(ResponceJson.responseResult.payload).indexOf("MovePointSuccess")>=0){
                        var obj=ResponceJson.action.ns_rwset[0].rwset.writes[0].value
                        console.log("mymymy++"+obj);
                        var objobj=JSON.parse(obj);
                        console.log("mememem+"+JSON.stringify(objobj.school));
                        var obi2=ResponceJson.responseResult.payload

                        var obi2obi3=JSON.parse("{\"name\":\"imooc\"}");
                        console.log(obi2obi3);
                        var obi2obi2=JSON.parse(obi2);

                         //console.log("ashdh+++"+obj3);
                        console.log("obj type");   
                        console.log(typeof obj);
                        console.log("obi2 type");   
                        console.log(typeof obi2);
                        console.log("obi2obi2 type");   
                       console.log(typeof obi2obi2);
                       console.log("jiuahwdooio++++"+obi2);
                    res.json({
                        success:"true",
                        school:objobj.school, 
                        Time:ResponceJson.timestamp,                                               
                        dengji:obi2obi2.message.dengji,
                        neirong:obi2obi2.message.neirong,
                        Partment:obi2obi2.message.partment,
                        StudentID:ResponceJson.action.ns_rwset[0].rwset.reads[1].key,
                        AdminID:ResponceJson.action.ns_rwset[0].rwset.reads[0].key
                    });
                }
                    //res.json("{\"QueryAdminResult\":\""+JSON.stringify(ResponceJson.action.ns_rwset[0].rwset.writes[0].value)+"\"}");
                    //console.log("The StudentID already exists");
                    
                    //callback(null,JSON.stringify(ResponceJson.success));
                }   
            }
        })  
});


router.post('/myallhistory', function(req,res){
    var IID= req.body.args;
    console.log("asda++"+IID)
    BC.Historylist(IID,function(err,responce){
    var ResponceJson=JSON.parse(responce);
    var count=0
    console.log(ResponceJson.success);
            if(err != null){
                console.log("Query Fail"+err);                  
            }
            else{            
                if(ResponceJson.success==false){  
                    res.send("\"Result\":\"The AdminID  not exists!!\"");
                                    
                }
                else{
                    
                    console.log(ResponceJson.message.length);
                    var resultt={};
                    resultt.array=[];
                    for(var i=0;i<ResponceJson.message.length;i++) {
                        (function(i){
                         setTimeout(function(){
                            console.log("I will do for action!!!");
                            console.log("I will do for action!!!");
                            console.log("I will do for action!!!");
                        BC.TxidQuery(ResponceJson.message[i].tx_id,function(err,responce2){
                        //console.log(ResponceJson.message[i].tx_id)
                        var ResponceJson2=JSON.parse(responce2);    
                        if(err != null){
                                    console.log("Query Fail"+err);                  
                                 }
                        else{            
                             if(ResponceJson2.success==false){  
                        res.send("\"Result\":\"The txid  not exists!!\"");            
                                }       
                            else{
                              if(JSON.stringify(ResponceJson2.responseResult.payload).indexOf("MovePointSuccess")>=0){
                            count=count+1
                            var obj=ResponceJson2.action.ns_rwset[0].rwset.writes[0].value
                     
                        var objobj=JSON.parse(obj);
                       
                        var obi2=ResponceJson2.responseResult.payload
                       
                        var obi2obi2=JSON.parse(obi2);
                        var list="tx_id_"+String(count);
                    

                        resultt.array[resultt.array.length]=
                       
                        {
                        "IDDD":list,
                        "school":objobj.school, 
                        "Time":ResponceJson2.timestamp,                                               
                        "dengji":obi2obi2.message.dengji,
                        "neirong":obi2obi2.message.neirong,
                        "Partment":obi2obi2.message.partment,
                        "StudentID":ResponceJson2.action.ns_rwset[0].rwset.reads[1].key,
                        "AdminID":ResponceJson2.action.ns_rwset[0].rwset.reads[0].key
                    }
                    console.log("The list is ");
                    console.log("The list is ");
                    console.log("The list is ");
                    
                    console.log(JSON.stringify(resultt));
 
                }
                    //res.json("{\"QueryAdminResult\":\""+JSON.stringify(ResponceJson.action.ns_rwset[0].rwset.writes[0].value)+"\"}");
                    //console.log("The StudentID already exists");
                    if(i+1==ResponceJson.message.length){
                        res.json({
                        result:"success",
                        Mymy:resultt

                    })                     
                    }
                    //callback(null,JSON.stringify(ResponceJson.success));
                }   
            }
        })
                         },i*5000);
                         })(i);
       

                    }
                    console.log("I am after for !!!");
                    ;
                    
                }   
            }
        })  
});
module.exports = router;
