/**
 * Created by yongchun on 17/11/3.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TrainInfoModel = new Schema({
    txid: String,
    bianhao: String,
    number:Number,
    certificateNum:String,
    name: String,
    term: String,
    verifyCode: String,
    trainTime: String,
    authenTime: String,
    phone: String,
    mailbox: String,
    institution: String,
    position: String
});

var TrainInfoModel2 = new Schema({
    txid: String,
    StudentID:String,
    StudentName:String,    
    mailbox: String,
    trainlocation:String,
    traintime:String,
    institution: String,
    position: String,
    message:String
});
module.exports = mongoose.model('traininfo2',TrainInfoModel2);
