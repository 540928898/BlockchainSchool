/**
 * Created by yongchun on 17/9/22. modify by pengu on 2018/5/20
 */

 var Poster = require('./poster').Poster;
 var contract = require('../contract');
 var BCMessageFP = require('./message').BCMessageFP;
 var BCMessageFPTx = require('./message').BCMessageFPTx;
 var Poster2 = require('./poster2').Poster2;
 /**BCMessageFPTx
  * 实例化，添加第一个学员
 */
function addStudent(data,callback){
	var body = data;
	var StudentInf = {
	    "Xuehao": body.Xuehao,
	    "Name": body.Name,  //youxiang
        "School": body.School,//xueyuan
        "Password": body.Password,
        "Email": body.Email,
        "Money": body.Money		
	}
	var msg = new BCMessageFP("addStudent",[String(body.StudentID),String(body.Name),String(body.Password),String(body.School),String(body.Email),String(body.Money)]); 
	Poster(contract.invoke,msg,function(err,resdata){
		if(err != null){
			callback(err,null);
		}
		callback(null,resdata);
	});
}
/**
*添加学员信息
*/

function QueryStudent(data,callback){ // Data  is a string 

	console.log("my name is QueryStudent!!!")
	
	var msg = new BCMessageFP("QueryAccount",[String(data)]);   
	Poster(contract.query,msg,function(err,resdata){
		if(err != null){
			callback(err,null);
		}
		callback(null,resdata);
	});
}
function StudentLogin(data,callback){    // data is a json

	console.log("my name is StudentLogin!!!")
	console.log("data.StudentID++++"+String(data.StudentID))
	console.log("data.Password++++"+String(data.Password))
	var msg = new BCMessageFP("loginStudent",[String(data.StudentID),String(data.Password)]);   
	Poster(contract.query,msg,function(err,resdata){
		if(err != null){
			callback(err,null);
		}
		callback(null,resdata);
	});
}

function AdminLogin(data,callback){

	console.log("my name is AdminLogin!!!")
	
	var msg = new BCMessageFP("loginAdmin",[String(data.StudentID),String(data.Password)]);   
	Poster(contract.query,msg,function(err,resdata){
		if(err != null){
			callback(err,null);
		}
		callback(null,resdata);
	});
}
function TxidQuery(data,callback){   //data is a string 

	console.log("my name is TxidQuery!!!")
	
	var msg = new BCMessageFPTx([String(data)]);   
	Poster2(msg,function(err,resdata){
		if(err != null){
			callback(err,null);
		}
		callback(null,resdata);
	});
}

function Historylist(data,callback){

	console.log("my name is Historylist!!!")
	
	var msg = new BCMessageFP("getHistoryForKey",[String(data)]);   
	Poster(contract.query,msg,function(err,resdata){
		if(err != null){
			callback(err,null);
		}
		callback(null,resdata);
	});
}

function MovePoint(data,callback){
	var body = data;
	var msg = new BCMessageFP("movePoint",[
						String(body.AdminID),
						String(body.StudentID),
						String(body.Point),
						String(body.Password),
						String(body.Message)]); 
	Poster(contract.invoke,msg,function(err,resdata){
		if(err != null){
			callback(err,null);
		}
		callback(null,resdata);
	});
}



/**
*修改学员信息
*/

function updateLearner(data,callback){
 	var body = data;
 	var LearnerInf = {
 		"Bianhao":body.bianhao,
 		"LearnerId":body.phone,
 		"Name":body.name,
 		"Mailbox":body.mailbox,
 		"Institution":body.institution,
 		"Position":body.position
 	}
 	var LearnerInfstr = JSON.stringify(LearnerInf);
 	var msg = new BCMessageFP("updateLearner",[body.certificateNum,LearnerInfstr]);

 	Poster(contract.train,msg,function(err,resdata){
 		if(err != null){
 			callback(err,null);
 		}
 		callback(null,resdata);
 	});
 }
/**
*删除人员信息
*/
function deleteID(data,callback){
	var msg = new BCMessageFP("delete",[data.certificateNum]);

	Poster(contract.train,msg,function(err,resdata){
            if(err !=null){
	        callback(err,null);
	    }
	    callback(null,resdata);
        })
}
/**
*查询区块信息
*/
function getBlockInfo(data,callback){
        var msg = {"hash":data.hash};
        Poster2('/api/block/getinfo2',msg,function(err,resdata){
//            if(err !=null){
//                callback(err,null);
//            }
            callback(null,resdata);
        })
}

/**
*查询区块信息
*/
function getBlockInfo2(data,callback){
        var msg = {"number":data.number};
        Poster2('/api/block/getinfo',msg,function(err,resdata){
//            if(err !=null){
//                callback(err,resdata);
//            }
            callback(null,resdata);
        })
}

/**
*查询交易信息
*/
function getTransaction(data,callback){
        var msg = {"number":data.hash};
        Poster2('/api/tx/json',msg,function(err,resdata){
            callback(null,resdata);
        })
}

/**
*查询区块链状态
*/
function getStatus(data,callback){
	var msg = {"number":data.hash};
	Poster2('/api/status/get',msg,function(err,resdata){
		callback(null,resdata);
	})
}

module.exports = {	
    addStudent: addStudent,
    updateLearner:updateLearner,
    deleteID:deleteID,
    getBlockInfo:getBlockInfo,
    getBlockInfo2:getBlockInfo2,
	getTransaction:getTransaction,
	getStatus:getStatus,
	QueryStudent:QueryStudent,
	StudentLogin:StudentLogin,
	AdminLogin:AdminLogin,
	TxidQuery:TxidQuery,
	Historylist:Historylist,
	MovePoint:MovePoint
};
