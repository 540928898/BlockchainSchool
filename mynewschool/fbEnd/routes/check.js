/**
 * Created by jimin on 17/5/2.
 */
var express = require('express');
var router = express.Router();
var LocalModel = require('../model/localapplicationmodel');
var assert = require('assert');
var BC = require('../blockchain/trainbcoperation');
var VerifyCode = require('../model/verifycode');
var TraininfoModel2 = require('../model/traininfo');
var AdminModel = require('../model/admin');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/learner/query', function(req, res, next) {
	TraininfoModel2.find(function(err,result){
		res.status(200).json(result);
	})
});
/* Add learner */
router.post('/learner/add', function(req, res, next) {
	TrainInfoModel2.find(function(err,result0){
		if(result0.length == 0){	 		
            //var mailbox = data.mailbox.slice(0,2) + "****" + data.mailbox.slice(6);
            //var jianhuaname = data.name.slice(0,1)+"*"+ data.name.slice(2);
			//var random =  Math.floor(100000000*Math.random());
			console.log("my name is addNewLearner: ")
	         BC.addInit({
	                  "StudentID": data.StudentID,
	                  "mailbox": data.mailbox,  //youxiang
                      "institution": data.institution,//xueyuan
                      "position": data.position
	                  },function(err,response){
			              if(err == null){
							//setTimeout(function(){
								//BC.getStatus({},function(err2,status){
									//var num = JSON.parse(status)
									// console.log("blockNum:"+num)
									// console.log(response);
									
									var traininfo_1 =new TrainInfoModel2({
										txid: response,
										StudentID: data.StudentID,
	    								mailbox: data.mailbox,  //youxiang
        								institution: data.institution,//xueyuan
        								position: data.position	
									});
									traininfo_1.save(function(err,doc1){
										console.log(doc1)
										//console.log("txid:"+bianhao+doc1.txid);
										console.log(doc1.random)
									})									
								// })
					        // },1)
			               }else{  
			                  console.log("bcAdd New fail")
			               }

	         })

		}
		else{
			 console.log("my name is addAnthorLearner: wrong!!!!")
	         BC.addInit({
	                  "StudentID": data.StudentID,
	                  "mailbox": data.mailbox,  //youxiang
                      "institution": data.institution,//xueyuan
                      "position": data.position
	                  },function(err,response){
			              if(err == null){
							//setTimeout(function(){
								//BC.getStatus({},function(err2,status){
									//var num = JSON.parse(status)
									// console.log("blockNum:"+num)
									console.log(response);
									var traininfo_1 =new TrainInfoModel2({
										txid: response,
										StudentID: data.StudentID,
	    								mailbox: data.mailbox,  //youxiang
        								institution: data.institution,//xueyuan
        								position: data.position	
									});
									traininfo_1.save(function(err,doc1){
										console.log(doc1)
										console.log("I am saving in mongodb")
										//console.log("txid:"+bianhao+doc1.txid);
										
									})									
								// })
					        // },1)
			               }else{  
			                  console.log("bcAdd Anthor fail")
			               }

	         })
					
		}


	});
})

/**
*add Admin
*/
router.post('/admin/add', function(req, res, next){
	var body =req.body;
	var bianhao;
	AdminModel.find(function(err,result0){
		console.log(result0.length)
		if(result0.length == 0){
			bianhao = 1;
			var admin_1 =new TraininfoModel({
				bianhao0: bianhao,
				bianhao: "管理员" + bianhao,
			    name: body.name,
			    phone: body.phone,
			    mailbox: body.mailbox,
			    institution: body.institution,
			    position: body.position
			})
		    admin_1.save(function(err,doc){
		    	console.log(doc);
		    	res.status(200).json({
		    		status:"成功添加该管理员",
		    		data:doc
		            })
		    })
		}else{
			AdminModel.find({"phone": body.phone},function(err,result){
				bianhao = result0.length + 1;
				if(result.length == 0){
					var admin_1 =new AdminModel({
						bianhao: "管理员" + bianhao,
					    name: body.name,
					    phone: body.phone
					})

	                admin_1.save(function(err,doc1){
				    	res.status(200).json({
				    		status:"成功添加该管理员",
				    		data:doc1
				            })
	                })


				}else{
					res.status(200).json({status:"已添加过该管理员！"})
				}
			})			
		}
	})

})
/**
*updateLearner
*/
router.post('/learner/update', function(req,res,next){
	var body = req.body;
	console.log(JSON.stringify(body))
    TraininfoModel.findOneAndUpdate({"phone": body.phone},{$set:{
    	    "name":body.name,"mailbox":body.mailbox,"institution":body.institution,"position":body.position}
        },{new:true},function(err, result){
    	res.status(200).json(result);
            var mailbox = body.mailbox.slice(0,2) +"****"+body.mailbox.slice(6);
	    BC.updateLearner({
			"bianhao": result.bianhao,
			"certificateNum":result.certificateNum,
	    	"name": body.name,
	    	"phone": body.phone,
//	    	"mailbox": mailbox,
	    	"institution": body.institution
	    //	"position": body.position
	    },function(err,response){
            if(err == null){
                console.log("learner save in block");
                console.log(response);
				TraininfoModel.findByIdAndUpdate(doc1._id,{$set:{txid: response}},{new:true},
					function(err,doc){
					console.log("txid:"+doc.txid);
				})
			}else{
				console.log("bcAdd fail")
			}
	    })
    })
});

router.get('/admin/find', function(req,res,next){
    AdminModel.find(function(err, result){
    	res.status(200).json(result);
    })
});



/**
**通过区块ID查看交易记录
**/


router.post('/getblock', function(req,res,next){
    BC.getBlockInfo({
	"hash":req.body.hash
         },function(err,response){
             try{ 
                 data = JSON.parse(response);
                 console.log(data);
                 if (data.status==0){
			console.log("status:0");
                         res.json({
                             status:"0"
                         })
                 }else{
			console.log("status:1");
			         var random = JSON.parse(data.transactions[0].payload.data.actions[0].payload.action.proposal_response_payload.extension.results.ns_rwset[0].rwset.writes[0].value);
					 res.json({
                     status:"1",
                     previous_hash:data.previous_hash,
                     number:data.number,
                     txid:data.transactions[0].payload.header.channel_header.tx_id,
					 data_hash:data.previous_hash,
					 random:random.Random,
                     data_to_all:data.transactions[0].payload.data.actions[0].payload.action.proposal_response_payload.extension.results.ns_rwset[0].rwset.writes[1].value
                     });
          	 }
              } catch (e) {
		      console.log("status:2");
		      res.json({
		      status:"2"
		      })
	      } 
    })
})

/**
**通过区块号查找区块
**/
router.post('/getblock/bynum', function(req,res,next){
	var latestBlock = req.body.latestBlock*1;
    if(req.body.number>=0 && req.body.number<=latestBlock){
		BC.getBlockInfo2({
		"number":req.body.number
			 },function(err,response){
				 data = JSON.parse(response);
				 console.log("getblock"+data);
				if (data.status == null && data.number>=1){
						var random = JSON.parse(data.transactions[0].payload.data.actions[0].payload.action.proposal_response_payload.extension.results.ns_rwset[0].rwset.writes[0].value);
						console.log(random)
						res.json({
							status:"1",
							previous_hash:data.previous_hash,
							number:data.number,
							txid:data.transactions[0].payload.header.channel_header.tx_id,
							data_hash:data.previous_hash,
							random:random.Random,
							data_to_me:data.transactions[0].payload.data.actions[0].payload.action.proposal_response_payload.extension.results.ns_rwset[0].rwset.writes[0].value
						});
				}else if (req.body.number == 0){
							 data = JSON.parse(response);
							 console.log("getblock"+data);
							 res.json({
								 status:"1",
								 number:data.number,
								 data_hash:data.data_hash,
								 response:"该区块为创世区块"
							 })
				}else{
					res.json({
						status:"0",
						comment:"未找到相关数据",
						data:data
					})
			 }
		});
	}else{
		res.json({
			status:"0",
			comment:"未找到相关数据"
		})
	}
	
})

/**
 * 通过整数编号查询交易
*/



router.post('/getblock/identifier',function(req,res,next){
	TraininfoModel.findOne({"certificateNum":req.body.certificateNum},function(err,result){
		if(result !=null){
				BC.getBlockInfo2({
					"number":result.number
					 },function(err,response){
						 data = JSON.parse(response);
						 console.log(data);
						 try{	                             	
							 if (data!=null){
								var random = JSON.parse(data.transactions[0].payload.data.actions[0].payload.action.proposal_response_payload.extension.results.ns_rwset[0].rwset.writes[0].value);
								 res.json({
									 status:"1",
									 random:random.Random,
									 txid:data.transactions[0].payload.header.channel_header.tx_id,
									 previous_hash:data.previous_hash,
									 number:data.number,
									 data_hash:data.previous_hash,
									 data_to_me:data.transactions[0].payload.data.actions[0].payload.action.proposal_response_payload.extension.results.ns_rwset[0].rwset.writes[0].value
								 });
							 }else{
								 res.json({
									 status:"0"
								 })
							 }
						 } catch (e) {
							 res.json({
								 status:"2",
								 comment:"服务器正忙！"
							 })
						 }
				})
		}else{
			res.json({
				status:"2",
				note:"找不到此用户或授权码不对"
			})
		}
	})
});

/**
**通过交易ID查看交易记录
**/
router.post('/transaction', function(req,res,next){
    BC.getTransaction({
        "hash":req.body.hash
         },function(err,response){
             try{
                 data = JSON.parse(response);
                 console.log(data);
                 if (data.status==0){
                        console.log("status:0");
                         res.json({
                             status:"0"
                         })
                 }else{
                        console.log("status:1");
                     res.json({
                     status:"1",
                     value:data.payload.data.actions[0].payload.action.extension.results.ns_rwset[0].rwset.writes
                     });
                 }
              } catch (e) {
                      console.log("status:2");
                      res.json({
                      status:"2"
                      })
              }
    })
})

/**
**查看区块、交易数等
**/
router.post('/status/get', function(req,res,next){
    BC.getStatus({
        "hash":"0"
         },function(err,response){
             res.json(JSON.parse(response));
    })
})

module.exports = router;
