//学生工作

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var XueShengGongZuo = new Schema({

	xuehao : String,            
	name : String,              
	class : String,            
	partment : String,             
	period : String,              
	isPass : Boolean,               
	level : String, 
	apply_time:String,
    verifier:String,        
	txid : String,             
	admin: {
        type: Boolean,
        default: false
    }


});

module.exports = mongoose.model('xueshenggongzuo',XueShengGongZuo);