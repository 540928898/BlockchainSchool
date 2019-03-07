var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./config');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var TrainInfoModel = require('./model/traininfo');
var AdminfoModel = require('./model/admin');
var assert = require('assert');
var db = require('./model/datebase');
var LocalModel = require('./model/localapplicationmodel');
var BC = require('./blockchain/trainbcoperation');
var addLearner = require('./action/addlearner').addLearner;
//var certification = require('./action/certification').certification;
var images = require("images");
const fs = require('fs');
const TextToSVG = require('text-to-svg');
const svg2png = require("svg2png");
const Promise = require('bluebird');
// database connection.
// mongoose.connect(config.mongoUrl);
// var db = mongoose.connection;
db.on('error',console.error.bind(console, 'connection error: '));
db.once('open',function () {
    console.log('Mongoose Server connected.');
    TrainInfoModel.find(function(err,docs){
        if(docs.length == 0){

/************************增加学员 第一期*******************************/
/************************增加学员 第一期*******************************/
    	    var newLearner = setTimeout(function(){new addLearner({
				    certificateNum:"201701000",
	                name: "马小峰",
	                trainTime:"2017年8月5日",
	                authenTime:"2017年8月27日",
			        term:"第一期",
	                phone: "18516177536",
	                mailbox: "无信息",
	                institution: "苏州同济金融科技研究院",
	                position: "院长"
    	   		})
    		},1000);
    	    var newLearner = setTimeout(function(){new addLearner({
				    certificateNum:"201701001",
	                name: "匡华龙",
	                trainTime:"2017年8月5日",
	                authenTime:"2017年8月27日",
			        term:"第一期",
	                phone: "15102196157",
	                mailbox: "无信息",
	                institution: "中国电信股份有限公司上海研究院",
	                position: "安全工程师"
    	   		})
			},11000);
    	    var newLearner = setTimeout(function(){new addLearner({
				    certificateNum:"201701002",
	                name: "杜向军",
	                trainTime:"2017年8月5日",
	                authenTime:"2017年8月27日",
			        term:"第一期",
	                phone: "13213073010",
	                mailbox: "无信息",
	                institution: "上海挖易网络科技有限公司",
	                position: "Java工程师"
    	   		})
    		},21000);
    	    var newLearner = setTimeout(function(){new addLearner({//4
				    certificateNum:"201701003",
	                name: "高阳",
	                trainTime:"2017年8月5日",
	                authenTime:"2017年8月27日",
			        term:"第一期",
	                phone: "18650031837",
	                mailbox: "无信息",
	                institution: "上海挖易网络科技有限公司",
	                position: "软件工程师"
    	   		})
    		},31000);
    	    var newLearner = setTimeout(function(){new addLearner({
				    certificateNum:"201701004",
	                name: "李培才",
	                trainTime:"2017年8月5日",
	                authenTime:"2017年8月27日",
			        term:"第一期",
	                phone: "13515203825",
	                mailbox: "无信息",
	                institution: "上海挖易网络科技有限公司",
	                position: "联合创始人"
    	   		})
    		},41000);
    	    var newLearner = setTimeout(function(){new addLearner({
				    certificateNum:"201701005",
	                name: "刘大巍",
	                trainTime:"2017年8月5日",
	                authenTime:"2017年8月27日",
			        term:"第一期",
	                phone: "18114528838",
	                mailbox: "无信息",
	                institution: "中储大华供应链金融有限公司",
	                position: "营销总监"
    	   		})
    		},51000);
    	    var newLearner = setTimeout(function(){new addLearner({
				    certificateNum:"201701006",
	                name: "马珂",
	                trainTime:"2017年8月5日",
	                authenTime:"2017年8月27日",
			        term:"第一期",
	                phone: "15021053893",
	                mailbox: "无信息",
	                institution: "北京市中伦文德律师事务所上海分所",
	                position: "律师助理"
    	   		})
    		},61000);
    	    var newLearner = setTimeout(function(){new addLearner({
				    certificateNum:"201701007",
	                name: "沈凌",
	                trainTime:"2017年8月5日",
	                authenTime:"2017年8月27日",
			        term:"第一期",
	                phone: "18662214195",
	                mailbox: "无信息",
	                institution: "苏州云链信息咨询有限公司",
	                position: "项目总监"
    	   		})
    		},71000);
    	    var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201701008",
				    name: "张超",
	                trainTime:"2017年8月5日",
	                authenTime:"2017年8月27日",
			        term:"第一期",
	                phone: "15921516694",
	                mailbox: "无信息",
	                institution: "初创企业-注册中",
	                position: "技术合伙人"
    	   		})
    		},81000);
    	    var newLearner = setTimeout(function(){new addLearner({
				    certificateNum:"201701009",
	                name: "郑广军",
	                trainTime:"2017年8月5日",
	                authenTime:"2017年8月27日",
			        term:"第一期",
	                phone: "13564952957",
	                mailbox: "无信息",
	                institution: "上海汇付数据服务有限公司",
	                position: "数据仓库开发"
    	   		})
    		},91000);
    	    var newLearner = setTimeout(function(){new addLearner({
				    certificateNum:"2017010010",
	                name: "李彦彬",
	                trainTime:"2017年8月5日",
	                authenTime:"2017年8月27日",
			        term:"第一期",
	                phone: "18687616986",
	                mailbox: "无信息",
	                institution: "无信息",
	                position: "无信息"
    	   		})
    		},101000);
    	    var newLearner = setTimeout(function(){new addLearner({
				    certificateNum:"2017010011",
	                name: "偶瑞军",
	                trainTime:"2017年8月5日",
	                authenTime:"2017年8月27日",
			        term:"第一期",
	                phone: "18800089585",
	                mailbox: "无信息",
	                institution: "航天信息股份有限公司",
	                position: "政策研究员/高级工程师"
    	   		})
    		},111000);
    	    var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201701012",
				name: "梁子豪",
				trainTime:"2017年8月5日",
				authenTime:"2017年8月27日",
				term:"第一期",
				phone: "18521023475",
				mailbox: "无信息",
				institution: "上海融甡金融信息有限公司",
				position: "项目经理"
    	   		})
    		},121000);
    	    var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201701013",
	                name: "段恒",
	                trainTime:"2017年8月5日",
	                authenTime:"2017年8月27日",
			        term:"第一期",
	                phone: "13032880202",
	                mailbox: "无信息",
	                institution: "无信息",
	                position: "无信息"
    	   		})
    		},131000);
    	    var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201701014",
	                name: "吕志宽",
	                trainTime:"2017年8月5日",
	                authenTime:"2017年8月27日",
			        term:"第一期",
	                phone: "13376411007",
	                mailbox: "无信息",
	                institution: "泰易网络科技",
	                position: "总经理"
    	   		})
    		},141000);
    	    var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201701015",
	                name: "萧咏珊",
	                trainTime:"2017年8月5日",
	                authenTime:"2017年8月27日",
			        term:"第一期",
	                phone: "15692153681",
	                mailbox: "无信息",
	                institution: "上海融旌金融信息服务有限公司",
	                position: "高级项目经理"
    	   		})
    		},151000);
    	    var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201701016",
	                name: "韩毅",
	                trainTime:"2017年8月5日",
	                authenTime:"2017年8月27日",
			        term:"第一期",
	                phone: "13011392233",
	                mailbox: "无信息",
	                institution: "无信息",
	                position: "无信息"
    	   		})
    		},161000);
    	    var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201701017",
	                name: "夏勇强",
	                trainTime:"2017年8月5日",
	                authenTime:"2017年8月27日",
			        term:"第一期",
	                phone: "13305558383",
	                mailbox: "无信息",
	                institution: "安徽九州网络科技",
	                position: "法人"
    	   		})
    		},171000);
    	    var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201701018",
	                name: "于洋",
	                trainTime:"2017年8月5日",
	                authenTime:"2017年8月27日",
			        term:"第一期",
	                phone: "15652406391",
	                mailbox: "无信息",
	                institution: "中金农信投资管理（北京）有限公司",
	                position: "部门经理"
    	   		})
    		},181000);
    	    var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201701019",
	                name: "周高翔",
	                trainTime:"2017年8月5日",
	                authenTime:"2017年8月27日",
			        term:"第一期",
	                phone: "15581334931",
	                mailbox: "无信息",
	                institution: "无信息",
	                position: "无信息"
    	   		})
    		},191000);
    	    var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201701020",
	                name: "黄倩婷",
	                trainTime:"2017年8月5日",
	                authenTime:"2017年8月27日",
			        term:"第一期",
	                phone: "18516147846",
	                mailbox: "无信息",
	                institution: "渣打银行",
	                position: "中小企业金融客群部助理总监"
    	   		})
    		},201000);
    	    var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201701021",
	                name: "崔近",
	                trainTime:"2017年8月5日",
	                authenTime:"2017年8月27日",
			        term:"第一期",
	                phone: "18301983159",
	                mailbox: "无信息",
	                institution: "上海嘉定房屋征收事务所有限公司",
	                position: "动迁工作谈判协商"
    	   		})
    		},211000);
    	    var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201701022",
	                name: "王伟",
	                trainTime:"2017年8月5日",
	                authenTime:"2017年8月27日",
			        term:"第一期",
	                phone: "18838014148",
	                mailbox: "无信息",
	                institution: "无信息",
	                position: "无信息"
    	   		})
    		},221000);
    	    var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201701023",
	                name: "张冶国",
	                trainTime:"2017年8月5日",
	                authenTime:"2017年8月27日",
			        term:"第一期",
	                phone: "18656702056",
	                mailbox: "无信息",
	                institution: "北京卓信智恒数据科技股份有限公司",
	                position: "移动互联网部总经理"
    	   		})
    		},231000);
    	    var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201701024",
	                name: "张丽玲",
	                trainTime:"2017年8月5日",
	                authenTime:"2017年8月27日",
			        term:"第一期",
	                phone: "13593159195",
	                mailbox: "无信息",
	                institution: "山西煤销集团信息工程有限公司",
	                position: "商务部"
    	   		})
    		},241000);
    	    var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201701025",
	                name: "周玮玉",
	                trainTime:"2017年8月5日",
	                authenTime:"2017年8月27日",
			        term:"第一期",
	                phone: "18520800250",
	                mailbox: "无信息",
	                institution: "山西煤销集团信息工程有限公司",
	                position: "商务部"
    	   		})
    		},251000);
    	    var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201701026",
	                name: "林彬",
	                trainTime:"2017年8月5日",
	                authenTime:"2017年8月27日",
			        term:"第一期",
	                phone: "17717371026",
	                mailbox: "无信息",
	                institution: "同济大学经管学院",
	                position: "IT经理"
    	   		})
    		},261000);
    	    var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201701027",
	                name: "卢林",
	                trainTime:"2017年8月5日",
	                authenTime:"2017年8月27日",
			        term:"第一期",
	                phone: "13213073010",
	                mailbox: "无信息",
	                institution: "上海挖易网络科技有限公司",
	                position: "Java工程师"
    	   		})
    		},271000);
    	    var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201701028",
	                name: "罗勇",
	                trainTime:"2017年8月5日",
	                authenTime:"2017年8月27日",
			        term:"第一期",
	                phone: "15216845565",
	                mailbox: "无信息",
	                institution: "上海弥敦网络科技有限公司",
	                position: "技术总监"
    	   		})
    		},281000);
    	    var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201701029",
	                name: "祝文伟",
	                trainTime:"2017年8月5日",
	                authenTime:"2017年8月27日",
			        term:"第一期",
	                phone: "13901650499",
	                mailbox: "无信息",
	                institution: "上海弥敦网络科技有限公司",
	                position: "技术总监"
    	   		})
    		},291000);
    	    var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201701030",
	                name: "高云鹏",
	                trainTime:"2017年8月5日",
	                authenTime:"2017年8月27日",
			        term:"第一期",
	                phone: "13584825646",
	                mailbox: "无信息",
	                institution: "苏州八爪鱼在线旅游发展有限公司",
	                position: "数据分析师"
    	   		})
    		},301000);
    	    var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201701031",
	                name: "秦海川",
	                trainTime:"2017年8月5日",
	                authenTime:"2017年8月27日",
			        term:"第一期",
	                phone: "18921414481",
	                mailbox: "无信息",
	                institution: "苏州八爪鱼在线旅游发展有限公司",
	                position: "项目经理"
    	   		})
    		},311000);
    	    var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201701032",
	                name: "韦振飞",
	                trainTime:"2017年8月5日",
	                authenTime:"2017年8月27日",
			        term:"第一期",
	                phone: "17717046730",
	                mailbox: "无信息",
	                institution: "币林网络科技（上海）有限公司",
	                position: "产品经理"
    	   		})
    		},321000);
    	    var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201701033",
	                name: "周岩",
	                trainTime:"2017年8月5日",
	                authenTime:"2017年8月27日",
			        term:"第一期",
	                phone: "18049735622",
	                mailbox: "无信息",
	                institution: "雷盈科技（上海）有限公司",
	                position: "项目经理"
    	   		})
    		},331000);

    		var waitTime = setTimeout(function(){console.log("第一期学员录入完毕")},336000)
/**********************************************************************/

/************************增加学员 第二期*******************************/
/************************增加学员 第二期*******************************/
    	    var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201702001",
	                name: "李娟",
	                trainTime:"2017年9月2日",
	                authenTime:"2017年9月10日",
			        term:"第二期",
	                phone: "13501975066",
	                mailbox: "lijuan@sfia.org.cn",
	                institution: "上海金融信息行业协会",
	                position: "秘书长"
    	   		})
    		},341000);
    	    var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201702002",
	                name: "吴军",
	                trainTime:"2017年9月2日",
	                authenTime:"2017年9月10日",
			        term:"第二期",
	                phone: "13901665266",
	                mailbox: "wujun@sfia.org.cn",
	                institution: "上海金融信息行业协会",
	                position: "秘书长"
    	     	})
    	    },351000);
    	   	var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201702003",
	                name: "陈国斌",
	                trainTime:"2017年9月2日",
	                authenTime:"2017年9月10日",
			        term:"第二期",
	                phone: "13916800750",
	                mailbox: "cgb@sfia.org.cn",
	                institution: "上海金融信息行业协会",
	                position: "副秘书长"
    	   	    })
    	    },361000);
    	    var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201702004",
	                name: "臧琴",
	                trainTime:"2017年9月2日",
	                authenTime:"2017年9月10日",
			        term:"第二期",
	                phone: "18616872677",
	                mailbox: "zangqin@sfia.org.cn",
	                institution: "上海金融信息行业协会",
	                position: "秘书长助理"
    	   		})
    		},371000);
    	    var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201702005",
	                name: "顾惠萍",
	                trainTime:"2017年9月2日",
	                authenTime:"2017年9月10日",
			        term:"第二期",
	                phone: "13524524528",
	                mailbox: "zangqin@sfia.org.cn",
	                institution: "上海金融信息行业协会",
	                position: "秘书长助理"
    	     	})
    	    },381000);
    	   	var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201702006",
	                name: "方致远",
	                trainTime:"2017年9月2日",
	                authenTime:"2017年9月10日",
			        term:"第二期",
	                phone: "18651863403",
	                mailbox: "zangqin@sfia.org.cn",
	                institution: "上海金融信息行业协会",
	                position: "秘书长助理"
    	     	})
    	    },391000);
    	   	var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201702007",
	                name: "谭晓虎",
	                trainTime:"2017年9月2日",
	                authenTime:"2017年9月10日",
			        term:"第二期",
	                phone: "13971124644",
	                mailbox: "42140769@qq.com",
	                institution: "上海钱橙互联网金融信息服务有限公司",
	                position: "技术总监"
    	   	  })
    	    },401000);
    	    var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201702008",
	                name: "焦光明",
	                trainTime:"2017年9月2日",
	                authenTime:"2017年9月10日",
			        term:"第二期",
	                phone: "13551333310",
	                mailbox: "123000800@qq.com",
	                institution: "北京上方传媒科技股份有限公司",
	                position: "执行总裁"
    	   	  })
    	    },411000);   
    	    var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201702009",
	                name: "赵岩",
	                trainTime:"2017年9月2日",
	                authenTime:"2017年9月10日",
			        term:"第二期",
	                phone: "15247007000",
	                mailbox: "1364897878@qq.com",
	                institution: "无信息",
	                position: "无信息"
    	     	})
    	   	},421000);
    	    var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201702010",
	                name: "顾东良",
	                trainTime:"2017年9月2日",
	                authenTime:"2017年9月10日",
			        term:"第二期",
	                phone: "18601689115",
	                mailbox: "gudl@hmyd.com",
	                institution: "上海惠民益贷互联网金融信息服务有限公司",
	                position: "无信息"
    	     	})
    	   	},431000);
    	    var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201702011",
	                name: "周洲",
	                trainTime:"2017年9月2日",
	                authenTime:"2017年9月10日",
			        term:"第二期",
	                phone: "15903995009",
	                mailbox: "zhouz@fengrongwang.com",
	                institution: "上海金椰金融信息服务有限公司",
	                position: "技术总监"
    	    	})
    	   	},441000);    	    
    	   	var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201702012",
	                name: "黄荣邦",
	                trainTime:"2017年9月2日",
	                authenTime:"2017年9月10日",
			        term:"第二期",
	                phone: "15951812590",
	                mailbox: "hrb@quangames.com",
	                institution: "北京全游网络",
	                position: "java工程师"
    	    	})
    	   	},451000); 
    	    var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201702013",
	                name: "李恬",
	                trainTime:"2017年9月2日",
	                authenTime:"2017年9月10日",
			        term:"第二期",
	                phone: "13817237882",
	                mailbox: "1227233632@qq.cm",
	                institution: "上海内胜信息科技有限公司",
	                position: "CEO"
    	     	})
    	   	},461000);
    	    var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201702014",
	                name: "胡君",
	                trainTime:"2017年9月2日",
	                authenTime:"2017年9月10日",
			        term:"第二期",
	                phone: "18721105237",
	                mailbox: "hujun@jinhuhang.com.cn",
	                institution: "金互行金融信息服务有限公司",
	                position: "总经理助理"
    	     	})
    	   	},471000);
    	    var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201702015",
	                name: "季建勇",
	                trainTime:"2017年9月2日",
	                authenTime:"2017年9月10日",
			        term:"第二期",
	                phone: "15257813303",
	                mailbox: "6059047@qq.com",
	                institution: "自由投资人",
	                position: "无信息"
    	    	})
    	   	},481000);    	    
    	   	var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201702016",
	                name: "卢双福",
	                trainTime:"2017年9月2日",
	                authenTime:"2017年9月10日",
			        term:"第二期",
	                phone: "13996135225",
	                mailbox: "731685169@qq.com",
	                institution: "重庆迪迪逛客科技有限公司",
	                position: "技术总监"
    	    	})
    	   	},491000);      	    
    	    var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201702017",
	                name: "杨雷",
	                trainTime:"2017年9月2日",
	                authenTime:"2017年9月10日",
			        term:"第二期",
	                phone: "18730230219",
	                mailbox: "781194199@qq.com",
	                institution: "无信息",
	                position: "无信息"
    	    	})
    	   	},501000);    	    
    	   	var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201702018",
	                name: "罗京中",
	                trainTime:"2017年9月2日",
	                authenTime:"2017年9月10日",
			        term:"第二期",
	                phone: "13818031358",
	                mailbox: "1klsh@163.com",
	                institution: "无信息",
	                position: "无信息"
    	    	})
    	   	},511000); 
    	    var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201702019",
	                name: "张潇",
	                trainTime:"2017年9月2日",
	                authenTime:"2017年9月10日",
			        term:"第二期",
	                phone: "13533234870",
	                mailbox: "zhang.xiao@neusoft.com",
	                institution: "东软集团股份有限公司",
	                position: "高级项目软件经理"
    	     	})
    	   	},521000);
    	    var newLearner = setTimeout(function(){new addLearner({//20
				certificateNum:"201702020",
	                name: "张伟",
	                trainTime:"2017年9月2日",
	                authenTime:"2017年9月10日",
			        term:"第二期",
	                phone: "13520281977",
	                mailbox: "zhang_w-neu@neusoft.com",
	                institution: "东软集团股份有限公司",
	                position: "高级项目软件经理"
    	     	})
    	   	},531000);
    	    var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201702021",
	                name: "过向南",
	                trainTime:"2017年9月2日",
	                authenTime:"2017年9月10日",
			        term:"第二期",
	                phone: "13601182335",
	                mailbox: "guoxn@neusoft.com",
	                institution: "东软集团股份有限公司",
	                position: "管理干部"
    	    	})
    	   	},541000);    	    
    	   	var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201702022",
	                name: "盛守林",
	                trainTime:"2017年9月2日",
	                authenTime:"2017年9月10日",
			        term:"第二期",
	                phone: "13194318885",
	                mailbox: "shengsl@neusoft.com",
	                institution: "东软集团股份有限公司",
	                position: "管理干部"
    	    	})
    	   	},551000); 

    	    var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201702023",
	                name: "温晓帅",
	                trainTime:"2017年9月2日",
	                authenTime:"2017年9月10日",
			        term:"第二期",
	                phone: "18641179051",
	                mailbox: "wenxiaoshuai@neusoft.com",
	                institution: "东软集团股份有限公司",
	                position: "资深软件工程师"
    	    	})
    	   	},561000);    	    
    	   	var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201702024",
	                name: "陈良",
	                trainTime:"2017年9月2日",
	                authenTime:"2017年9月10日",
			        term:"第二期",
	                phone: "18917677527",
	                mailbox: "chenlaing@zillionfortune.com",
	                institution: "资邦金服网络科技集团有限公司",
	                position: "研发经理"
    	    	})
    	   	},571000);   	    
    	   	var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201702025",
	                name: "吴斌",
	                trainTime:"2017年9月2日",
	                authenTime:"2017年9月10日",
			        term:"第二期",
	                phone: "13917742502",
	                mailbox: "wubin@zillionfortune.com",
	                institution: "资邦金服网络科技集团有限公司",
	                position: "数据组开发经理"
    	    	})
    	   	},581000);        	    
    	    var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201702026",
	                name: "李倩",
	                trainTime:"2017年9月2日",
	                authenTime:"2017年9月10日",
			        term:"第二期",
	                phone: "18616808371",
	                mailbox: "liqian@zillionfortune.com",
	                institution: "资邦金服网络科技集团有限公司",
	                position: "JAVA开发"
    	    	})
    	   	},591000);    	    
    	   	var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201702027",
	                name: "张清华",
	                trainTime:"2017年9月2日",
	                authenTime:"2017年9月10日",
			        term:"第二期",
	                phone: "18602119694",
	                mailbox: "zhangqinghua@zillionfortune.com",
	                institution: "资邦金服网络科技集团有限公司",
	                position: "JAVA开发"
    	    	})
    	   	},601000);
    	    var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201702028",
	                name: "甘志祥",
	                trainTime:"2017年9月2日",
	                authenTime:"2017年9月10日",
			        term:"第二期",
	                phone: "15881082300",
	                mailbox: "411334873@qq.com",
	                institution: "重庆迪迪逛客科技有限公司",
	                position: "CTO"
    	     	})
    	   	},611000);
    	    var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201702029",
	                name: "沈培良",
	                trainTime:"2017年9月2日",
	                authenTime:"2017年9月10日",
			        term:"第二期",
	                phone: "13301616921",
	                mailbox: "shenpeiliang@sucgtz.com",
	                institution: "上海建元股权投资基金管理合伙企业（有限合伙）",
	                position: "总经理"
    	     	})
    	   	},621000);
    	    var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201702030",
	                name: "高志良",
	                trainTime:"2017年9月2日",
	                authenTime:"2017年9月10日",
			        term:"第二期",
	                phone: "13818195560",
	                mailbox: "gaozhiliang@sucgtz.com",
	                institution: "上海建元股权投资基金管理合伙企业（有限合伙）",
	                position: "投资副总裁"
    	    	})
    	   	},631000);    	    
    	   	var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201702031",
	                name: "李佳明",
	                trainTime:"2017年9月2日",
	                authenTime:"2017年9月10日",
			        term:"第二期",
	                phone: "15000674378",
	                mailbox: "lijiaming@sucgtz.com",
	                institution: "上海建元股权投资基金管理合伙企业（有限合伙）",
	                position: "分析师"
    	    	})
    	   	},641000); 

    	   	var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201702032",
	                name: "李云凌",
	                trainTime:"2017年9月2日",
	                authenTime:"2017年9月10日",
			        term:"第二期",
	                phone: "15800696156",
	                mailbox: "Liyunling@sucgtz.com",
	                institution: "上海建元股权投资基金管理合伙企业（有限合伙）",
	                position: "董事总经理"
    	    	})
    	   	},651000); 
    	    var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201702033",
	                name: "潘红",
	                trainTime:"2017年9月2日",
	                authenTime:"2017年9月10日",
			        term:"第二期",
	                phone: "15901668252",
	                mailbox: "panhong@sucgtz.com",
	                institution: "上海建元股权投资基金管理合伙企业（有限合伙）",
	                position: "投资经理"
    	     	})
    	   	},661000);
    	    var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201702034",
	                name: "石玉萍",
	                trainTime:"2017年9月2日",
	                authenTime:"2017年9月10日",
			        term:"第二期",
	                phone: "13816562353",
	                mailbox: "yuping_shi@126.com",
	                institution: "上海阅链文化传媒有限公司",
	                position: "财务总监"
    	     	})
    	   	},671000);
    	    var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201702035",
	                name: "姬兴辉",
	                trainTime:"2017年9月2日",
	                authenTime:"2017年9月10日",
			        term:"第二期",
	                phone: "15628867777",
	                mailbox: "zangqin@sfia.org.cn",
	                institution: "深圳金伯睿基金管理有限公司",
	                position: "董事长"
    	    	})
    	   	},681000);  
			   var newLearner = setTimeout(function(){new addLearner({
				   certificateNum:"201702036",
					   name: "朱亚希",
					   trainTime:"2017年9月2日",
					   authenTime:"2017年9月10日",
					   term:"第二期",
					   phone: "18616377088",
					   mailbox: "yvonne_yaxi@hotmail.com",
					   institution: "Blue Sky International",
					   position: "未知"
				   })
			},691000);    
    		var waitTime = setTimeout(function(){console.log("第二期学员录入完毕")},696000);
/**********************************************************************/
/************************增加学员 第三期*******************************/
/************************增加学员 第三期*******************************/
			   var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201703001",
					name: "严世振",
					trainTime:"2017年11月18日",
					authenTime:"2017年11月26日",
					term:"第三期",
					phone: "无",
					mailbox: "无",
					institution: "风云科技",
					position: "研发部总监"
				})
			   },701000);    
			   var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201703002",
					name: "夏晓东",
					trainTime:"2017年11月18日",
					authenTime:"2017年11月26日",
					term:"第三期",
					phone: "无",
					mailbox: "无",
					institution: "风云科技",
					position: "资深开发经理"
				})
			   },711000);  
			   var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201703003",
					name: "刘俊",
					trainTime:"2017年11月18日",
					authenTime:"2017年11月26日",
					term:"第三期",
					phone: "无",
					mailbox: "无",
					institution: "风云科技",
					position: "高级产品经理"
				})
			   },721000);     
			   var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201703004",
					name: "周红",
					trainTime:"2017年11月18日",
					authenTime:"2017年11月26日",
					term:"第三期",
					phone: "无",
					mailbox: "无",
					institution: "风云科技",
					position: "信息化咨询师"
				})
			   },731000);      
			   var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201703005",
					name: "滕亚楠",
					trainTime:"2017年11月18日",
					authenTime:"2017年11月26日",
					term:"第三期",
					phone: "无",
					mailbox: "无",
					institution: "风云科技",
					position: "项目经理"
				})
			   },741000); 
			   var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201703006",
					name: "陈璐",
					trainTime:"2017年11月18日",
					authenTime:"2017年11月26日",
					term:"第三期",
					phone: "无",
					mailbox: "无",
					institution: "风云科技",
					position: "咨询师助理"
				})
			   },751000);     
			   var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201703007",
					name: "徐庆新",
					trainTime:"2017年11月18日",
					authenTime:"2017年11月26日",
					term:"第三期",
					phone: "无",
					mailbox: "无",
					institution: "风云科技",
					position: "执行副总监"
				})
			   },761000); 
			   var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201703008",
					name: "王飞",
					trainTime:"2017年11月18日",
					authenTime:"2017年11月26日",
					term:"第三期",
					phone: "无",
					mailbox: "无",
					institution: "风云科技",
					position: "高级开发工程师"
				})
			   },771000);      
			   var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201703009",
					name: "徐雷",
					trainTime:"2017年11月18日",
					authenTime:"2017年11月26日",
					term:"第三期",
					phone: "无",
					mailbox: "无",
					institution: "风云科技",
					position: "项目交付总监"
				})
			   },781000); 
			   var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201703010",
					name: "殷联佳",
					trainTime:"2017年11月18日",
					authenTime:"2017年11月26日",
					term:"第三期",
					phone: "无",
					mailbox: "无",
					institution: "风云科技",
					position: "开发总监"
				})
			   },791000);    
			   var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201703011",
					name: "殷联佳",
					trainTime:"2017年11月18日",
					authenTime:"2017年11月26日",
					term:"第三期",
					phone: "无",
					mailbox: "无",
					institution: "风云科技",
					position: "开发总监"
				})
			   },801000);     
			   var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201703012",
					name: "徐少松",
					trainTime:"2017年11月18日",
					authenTime:"2017年11月26日",
					term:"第三期",
					phone: "无",
					mailbox: "无",
					institution: "风云科技",
					position: "高级项目经理"
				})
			   },811000);    
			   var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201703013",
					name: "汪立翼",
					trainTime:"2017年11月18日",
					authenTime:"2017年11月26日",
					term:"第三期",
					phone: "无",
					mailbox: "无",
					institution: "风云科技",
					position: "顾问"
				})
			   },821000);     
			   var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201703014",
					name: "张征云",
					trainTime:"2017年11月18日",
					authenTime:"2017年11月26日",
					term:"第三期",
					phone: "无",
					mailbox: "无",
					institution: "风云科技",
					position: "执行总监"
				})
			   },831000);      
			   var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201703015",
					name: "滕亚楠",
					trainTime:"2017年11月18日",
					authenTime:"2017年11月26日",
					term:"第三期",
					phone: "无",
					mailbox: "无",
					institution: "风云科技",
					position: "工程师"
				})
			   },841000);   
			   var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201703016",
					name: "张卫敏",
					trainTime:"2017年11月18日",
					authenTime:"2017年11月26日",
					term:"第三期",
					phone: "无",
					mailbox: "无",
					institution: "上海建元股权投资基金管理合伙企业",
					position: "风控经理"
				})
			   },851000);     
			   var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201703017",
					name: "李克登",
					trainTime:"2017年11月18日",
					authenTime:"2017年11月26日",
					term:"第三期",
					phone: "无",
					mailbox: "无",
					institution: "北京驭风青云投资管理有限公司",
					position: "董事长"
				})
			   },861000); 
			   var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201703018",
					name: "许展",
					trainTime:"2017年11月18日",
					authenTime:"2017年11月26日",
					term:"第三期",
					phone: "无",
					mailbox: "无",
					institution: "风云科技",
					position: "高级开发工程师"
				})
			   },871000);      
			   var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201703019",
					name: "祝文光",
					trainTime:"2017年11月18日",
					authenTime:"2017年11月26日",
					term:"第三期",
					phone: "无",
					mailbox: "无",
					institution: "未知",
					position: "区块链从业者"
				})
			   },881000); 
			   var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201703020",
					name: "杨舒羽",
					trainTime:"2017年11月18日",
					authenTime:"2017年11月26日",
					term:"第三期",
					phone: "无",
					mailbox: "无",
					institution: "上海道麟资管",
					position: "未知"
				})
			   },891000);     
			   var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201703021",
					name: "陆正杨",
					trainTime:"2017年11月18日",
					authenTime:"2017年11月26日",
					term:"第三期",
					phone: "无",
					mailbox: "无",
					institution: "上海鹏欣永彤投资管理有限公司",
					position: "未知"
				})
			   },901000);     
			   var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201703022",
					name: "牛婧",
					trainTime:"2017年11月18日",
					authenTime:"2017年11月26日",
					term:"第三期",
					phone: "无",
					mailbox: "无",
					institution: "大一资本",
					position: "未知"
				})
			   },911000);    
			   var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201703023",
					name: "奚卫东",
					trainTime:"2017年11月18日",
					authenTime:"2017年11月26日",
					term:"第三期",
					phone: "无",
					mailbox: "无",
					institution: "未知",
					position: "区块链从业者"
				})
			   },921000);     
			   var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201703024",
					name: "李杰",
					trainTime:"2017年11月18日",
					authenTime:"2017年11月26日",
					term:"第三期",
					phone: "无",
					mailbox: "无",
					institution: "未知",
					position: "区块链从业者"
				})
			   },931000);      
			   var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201703025",
					name: "杨银风",
					trainTime:"2017年11月18日",
					authenTime:"2017年11月26日",
					term:"第三期",
					phone: "无",
					mailbox: "无",
					institution: "未知",
					position: "区块链从业者"
				})
			   },9410000);   
			   var newLearner = setTimeout(function(){new addLearner({
				certificateNum:"201703026",
					name: "周轶",
					trainTime:"2017年11月18日",
					authenTime:"2017年11月26日",
					term:"第三期",
					phone: "无",
					mailbox: "无",
					institution: "未知",
					position: "未知"
				})
			   },951000);   
		 var waitTime = setTimeout(function(){console.log("第三期学员录入完毕")},956000);

        AdminfoModel.find(function(err,docs){
/************************增加管理员*******************************/
/************************增加管理员*******************************/
            if(docs.length == 0){
                var admin1 = new AdminfoModel({
                    bianhao: "管理员1",
                    name: "黄羽翔",
                    phone: "17751661956"
                })
                admin1.save(function(err,doc1){
                    console.log(doc1);
		     //    var waitehandle = setTimeout(function(){
       //                  BC.addAdmin({
       //                      "bianhao":"管理员1",
       //                      "phone":"177****1956",
       //                      "name":doc1.name,                  
       //                  },function(err,response){
       //                      if(err == null){
       //                          console.log("Admin save in block");
       //                          console.log(response);
       //                          AdminfoModel.findByIdAndUpdate(doc1._id,{$set:{txid: response}},{new:true},function(err,doc){
       //                              console.log("txidG1:"+doc.txid);
       //                          })
       //                      }else{
       //                          console.log("bcAdd fail")
       //                      }
       //                  })
		     // },1000);
                })
                var admin2 = new AdminfoModel({
                    bianhao: "管理员2",
                    name: "丘永春",
                    phone: "18017982116"
                })
                admin2.save(function(err,doc1){
                    console.log(doc1);
                })

            }
        })
/***************************************************************/
/***************************************************************/
        }

	});
});
// routers.
var routes = require('./routes/index');
var users = require('./routes/users');
var test = require('./routes/test');
var check = require('./routes/check');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//passport config
var User = require('./model/user');
app.use(passport.initialize());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next){
    res.set('Access-Control-Allow-Origin','*');
    res.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
// use routers.
app.use('/', routes);
app.use('/users', users);
app.use('/test', test);
app.use('/check', check);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.json({
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: {}
    });
});

module.exports = app;
