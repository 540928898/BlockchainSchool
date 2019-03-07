//竞赛获奖
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var JingSaiHuoJiang = new Schema({
    xuehao:String,
    name: String, 
    class: String,
    award_name: String,
    award_time:String,
    award_level:String,
    isPass:Boolean,
    apply_time:String,
    verifier:String,
    txid:String,
    admin: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('jingsaihuojiang',JingSaiHuoJiang);