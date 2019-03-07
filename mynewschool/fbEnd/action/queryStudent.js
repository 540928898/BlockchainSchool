var BC = require('../blockchain/trainbcoperation');
function queryStudent(data) {	
	BC.QueryStudent(data,function(err,responce){
    var ResponceJson=JSON.parse(responce);
    console.log(ResponceJson.success);
            if(err != null){
            	console.log("Query Fail"+err);                  
            }
            else{            
                if(ResponceJson.success==false){  
            		 console.log("The StudentID  not exists: "+JSON.stringify(ResponceJson.message));
            		 //callback(null,JSON.stringify(ResponceJson.message));
            		// callback(null,JSON.stringify(ResponceJson.success));            		  
            	}
            	else{
            		console.log("The StudentID already exists");
            		
            		//callback(null,JSON.stringify(ResponceJson.success));
            	}   
            }
        })  
}
 exports.queryStudent = queryStudent;
