/**
*create by Qiu Yongchun on 2017/11/21
*/
var TrainInfoModel2 = require('../model/traininfo');

var StudentModel=require('../model/user.js')
var BC = require('../blockchain/trainbcoperation');
function addStudent(data) {	

			BC.QueryStudent(data,function(err,responce){
    		var ResponceJson=JSON.parse(responce);
    		//console.log(ResponceJson.success);
            if(err != null){
            	console.log("Query Fail"+ err);                  
            }
            else{            
                if(ResponceJson.success==false){
            		 //console.log("The StudentID  not exists: "+JSON.stringify(ResponceJson.message));
            		 BC.addStudent({
	                  "Xuehao": data.Xuehao,
	                  "Name": data.Name, //youxiang
                      "School": data.School,//xueyuan
                      "Password": data.Password,
                      "Email": data.Email,
                      "Money": data.Money
	                  },function(err,response){
			              if(err == null){
							//setTimeout(function(){
								//BC.getStatus({},function(err2,status){
									//var num = JSON.parse(status)
									// console.log("blockNum:"+num)
									console.log(response);
									var traininfo_1 =new StudentModel({
										Xuehao: data.Xuehao,     
    									Name: data.Name,
									    School: data.School,//xueyuan,
									    Password: data.Password,
									    Phone: data.Phone,
									    Email: data.Email,
									    Money: data.Money,
									    Xueyuan: data.Xueyuan,
									    Zhuangye: data.Zhuanye,
									    Chuangjiantime: data.Chuangjiantime
									});
									traininfo_1.save(function(err,doc1){
										console.log(doc1)
										console.log("I am saving in mongodb")
										//console.log("txid:"+bianhao+doc1.txid);
										
									})									
			               }else{  
			                  console.log("Student add fail")
			               }
	         })
            		// callback(null,JSON.stringify(ResponceJson.success));            		  
            	}
            	else{
            		console.log("The StudentID already exists");
            		//callback(null,JSON.stringify(ResponceJson.success));
            	}   
            }
        })  

}
 exports.addStudent = addStudent;
