/**
 * Created by wangjimin on 17/5/14.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/*
 * 验证码和余额*/
var VerifyCode = new Schema({
	password: String,
    phone: String,
    verifyCode: String,
    balance: Number
});

module.exports = mongoose.model('verifycode',VerifyCode);
