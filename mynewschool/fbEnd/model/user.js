var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({  
    Xuehao: String,      
    Name: String,
    Xuexiao: String,
    password: String,
    phone: String,
    email: String,
    money: String,
    xueyuan: String,
    zhuangye: String,
    chuangjiantime: String,
    admin: {
        type: Boolean,
        default: false
    }
});

User.plugin(passportLocalMongoose);
module.exports = mongoose.model('User',User);
