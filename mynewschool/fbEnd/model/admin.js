/**
 * Created by yongchun on 17/11/3.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AdminModel = new Schema({
	bianhao: String,
    name: String,
    phone: String
});

module.exports = mongoose.model('admin',AdminModel);
