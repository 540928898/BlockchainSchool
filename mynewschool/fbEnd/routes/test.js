/**
 * Created by yongchun on 17/11/20.
 */
var express = require('express');
var router = express.Router();
var contract = require('../contract');
var config = require('../config');
var User = require('../model/user');
var Verify = require('../model/verifycode');
var BC = require('../blockchain/trainbcoperation');
var Learner = require('../model/traininfo');
/********************* 下面所有的请求都是 nodejs server 的测试模块 *********************/

router.post('/user', function(req, res, next){
    User.findOne({"username":req.body.phone},function(err,result){
	res.json(result);	
    });
});

router.get('/users',function(req, res, next){
    User.find(function(err,result){
        res.json(result);
    });
});

router.get('/verifycode',function(req, res, next){
    Verify.find(function(err,result){
	res.json(result)	
    })
})

router.post('/delete',function(req,res,next){
    console.log(req.body.phone);
    User.remove({"username":req.body.phone},function(err,result){
        if(err){
	    res.json(err);
	}else{
	    Verify.remove({"phone":req.body.phone},function(err2,result2){
	        if(err2){
		   res.json({"err2":err2});	
		}else{
		   res.json({"result2":result2});
		}
	    })
	}
    })
})

router.post('/delete/learner',function(req,res,next){
    console.log(req.body.certificateNum);
//    User.remove({"username":req.body.phone},function(err,result){
        // if(err){
        //     res.json(err);
        // }else{
            // Verify.remove({"phone":req.body.certificateNum},function(err2,result2){
            //     if(err2){
            //        res.json({"err2":err2});
            //     }else{
//                   res.json({"result2":result2});
		   Learner.remove({"certificateNum":req.body.certificateNum},function(err3,result3){
                       BC.deleteID({
                            "certificateNum":req.body.certificateNum
                            },function(err,response){
                                if(err == null){
				    res.json({"txid":response})
                                    console.log("delete in block");
                                    console.log(response)
                                }else{
                                    cosole.log("bc delete fail")
                                }
                       })  
		   }) 
                //}
           // })
       // }
 //   })
})

router.post('/delete/admin',function(req,res,next){
    console.log(req.body.certificateNum);
    User.remove({"username":req.body.phone},function(err,result){
        if(err){
            res.json(err);
        }else{
            // Verify.remove({"phone":req.body.certificateNum},function(err2,result2){
            //     if(err2){
            //        res.json({"err2":err2});
            //     }else{
//                   res.json({"result2":result2});
		   Learner.remove({"phone":req.body.phone},function(err3,result3){
                       BC.deleteID({
                            "certificateNum":req.body.certificateNum
                            },function(err,response){
                                if(err == null){
				    res.json({"txid":response})
                                    console.log("delete in block");
                                    console.log(response)
                                }else{
                                    cosole.log("bc delete fail")
                                }
                       })  
		   }) 
              //  }
           // })
        }
    })
})
/*************************************** 测试模块 ***************************************/

module.exports = router;
