/**
*Ceate By yongchun on 17/9/22
*/
var http=require('http');
var config = require('../config');
//var process = require('process');
//发送http请求
function Poster2(reqData, callback){
    var postData=JSON.stringify(reqData);
    var options={        
        hostname:config.host,
        port:config.port,
        path:config.path2,
        method:'POST',
        headers:{
            "Content-Type": 'application/json',
            "authorization":'Bearer',
            'Content-Length':Buffer.byteLength(postData)
        },
    };
    var req=http.request(options, function(res) {
        console.log('Status:',res.statusCode);
        // console.log('headers:',JSON.stringify(res.headers));
        res.setEncoding('utf-8');
        res.on('data',function(chun){
            callback(null, chun);
        });
        res.on('end',function(){
            // console.log('No more data in response.********');
        });
    });
    req.on('error',function(err){
        console.error(err);
        callback(err, null)
    });
    req.write(postData);
    req.end();
//     console.log(reqData);
//     console.log(reqCc);
// //process.on('uncaughtException', function(err){
//     var req=http.request(options, function(res) {
//         console.log('Status:',res.statusCode);
// //        console.log('headers:',JSON.stringify(res.headers));
//         var str = '';
//         res.setEncoding('utf-8');
//         res.on('data',function(chun){
//             str += chun;
//         });
//         res.on('end',function(){
//             var Object = JSON.parse(str);
//             //console.log(Object.number);
//             if(Object.number != undefined){
//                 console.log("true");
//                 callback(null, str);
//             }else if(Object.signature != undefined){
//                 console.log("true");
//                 callback(null, str);
//             }else if(Object.latestBlock != undefined){
//                 console.log("true");
//                 callback(null, str);
//             }
//         });        
//         return res;
//     });

//     req.on('error',function(err){
//         console.error(err);
//         callback(err, "{\"status\":\"0\"}");
//         if(req.res){
//             req.res('abort');
//         }
//         req.abort();
//     }).on('timeout',function(e){
// 	if(req.res){
//             req.res('abort');
//         }
//         req.abort();
//     });
//     req.write(postData);
//     req.end();

}

module.exports = {
    Poster2:Poster2
};
