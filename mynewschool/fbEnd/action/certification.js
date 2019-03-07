/**
*create by Qiu Yongchun on 2017/12/6
*/
var images = require("images");
const fs = require('fs');
const TextToSVG = require('text-to-svg');
const svg2png = require("svg2png");
const Promise = require('bluebird');

function certification(number, name, sTime, eTime, term, txid, authentiTime, random){
	Promise.promisifyAll(fs);
	var bianhao = "编号：" + number;
	var contentl1 = name + "于"+sTime+"至"+eTime+",参加苏州同";
	var contentl2 = "济区块链研究院组织区块链人才培养"+term+"课程，完成所要";
	var contentl3 = "求的课程内容学习。";
	var content2 = "  特发此证！";
	var txid = " 区块链标识码:"+txid;
	var company = "苏州同济区块链研究院";
	const textToSVG = TextToSVG.loadSync('./fonts/文泉驿微米黑全字符.ttf');

	const sourceImg = images('./images/qualifications_bg.jpg');
	const sWidth = sourceImg.width();
	const sHeight = sourceImg.height();
/*****************bianhao*/
	const svg2 = textToSVG.getSVG(bianhao, {
	  x: 0,
	  y: 0,
	  fontSize: 12,
	  anchor: 'top',
	});
/*****************content*/
	const svg31 = textToSVG.getSVG(contentl1, {
	  x: 0,
	  y: 0,
	  fontSize: 18,
	  anchor: 'top',
	});
	const svg32 = textToSVG.getSVG(contentl2, {
	  x: 0,
	  y: 0,
	  fontSize: 18,
	  anchor: 'top',
	});
	const svg33 = textToSVG.getSVG(contentl3, {
	  x: 0,
	  y: 0,
	  fontSize: 18,
	  anchor: 'top',
	});
/*****************content2*/
	const svg4 = textToSVG.getSVG(content2, {
	  x: 0,
	  y: 0,
	  fontSize: 18,
	  anchor: 'top',
	});
/*****************txid*/
	const svg5 = textToSVG.getSVG(txid, {
	  x: 0,
	  y: 0,
	  fontSize: 10,
	  anchor: 'top',
	});
/*****************company*/
	const svg6 = textToSVG.getSVG(company, {
	  x: 0,
	  y: 0,
	  fontSize: 12,
	  anchor: 'top',
	});
/*****************authentiTime*/
	const svg7 = textToSVG.getSVG(authentiTime, {
	  x: 0,
	  y: 0,
	  fontSize: 12,
	  anchor: 'top',
	});
	Promise.coroutine(function* generateInvitationCard() {
	  const targetImg2Path = './images/2.png';
	  const targetImg31Path = './images/31.png';
	  const targetImg32Path = './images/32.png';
	  const targetImg33Path = './images/33.png';
	  const targetImg4Path = './images/4.png';
	  const targetImg5Path = './images/5.png';
	  const targetImg6Path = './images/6.png';
	  const targetImg7Path = './images/7.png';
	  const targetImg8Path = './images/tjFintech.png';
	  const [buffer2, buffer31, buffer32,buffer33,buffer4, buffer5, buffer6, buffer7] = yield Promise.all([
	    svg2png(svg2),
		svg2png(svg31),
	    svg2png(svg32),
	    svg2png(svg33),
	    svg2png(svg4),
		svg2png(svg5),
	    svg2png(svg6),
	    svg2png(svg7),
	  ]);

	  yield Promise.all([
	    fs.writeFileAsync(targetImg2Path, buffer2),
	    fs.writeFileAsync(targetImg31Path, buffer31),
	    fs.writeFileAsync(targetImg32Path, buffer32),
	    fs.writeFileAsync(targetImg33Path, buffer33),
	    fs.writeFileAsync(targetImg4Path, buffer4),
	    fs.writeFileAsync(targetImg5Path, buffer5),
	    fs.writeFileAsync(targetImg6Path, buffer6),
	    fs.writeFileAsync(targetImg7Path, buffer7),
	  ]);

	  const target2Img = images(targetImg2Path);
	  const t2Width = target2Img.width();
	  const t2Height = target2Img.height();
	  const offsetX2 = (sWidth - t2Width) / 2;
	  const offsetY2 = 130;

	  const target31Img = images(targetImg31Path);
	  const t31Width = target31Img.width();
	  const t31Height = target31Img.height();
	  const offsetX31 = (sWidth - t31Width) / 2 +6;
	  const offsetY31 = 163;

	  const target32Img = images(targetImg32Path);
	  const t32Width = target32Img.width();
	  const t32Height = target32Img.height();
	  const offsetX32 = (sWidth - t31Width) / 2 -30;
	  const offsetY32 = 187;

	  const target33Img = images(targetImg33Path);
	  const t33Width = target33Img.width();
	  const t33Height = target33Img.height();
	  const offsetX33 = (sWidth - t31Width) / 2 -30;
	  const offsetY33 = 213;

	  const target4Img = images(targetImg4Path);
	  const t4Width = target4Img.width();
	  const t4Height = target4Img.height();
	  const offsetX4 = (sWidth - t31Width) / 2 -30;
	  const offsetY4 = 238;

	  const target5Img = images(targetImg5Path);
	  const t5Width = target5Img.width();
	  const t5Height = target5Img.height();
	  const offsetX5 = (sWidth - t31Width) / 2 -30;
	  const offsetY5 = 263;

	  const target6Img = images(targetImg6Path);
	  const t6Width = target6Img.width();
	  const t6Height = target6Img.height();
	  const offsetX6 = (sWidth - t6Width) / 2 + 163;
	  const offsetY6 = 325;

	  const target7Img = images(targetImg7Path);
	  const t7Width = target7Img.width();
	  const t7Height = target7Img.height();
	  const offsetX7 = (sWidth - t7Width) / 2 + 163;
	  const offsetY7 = 350;

	  const target8Img = images(targetImg8Path);
	  const t8Width = target8Img.width();
	  const t8Height = target8Img.height();
	  const offsetX8 = (sWidth - t7Width) / 2 + 163;
	  const offsetY8 = 313;

	  images(sourceImg)
	  .draw(target2Img, offsetX2, offsetY2)
	  .draw(target31Img, offsetX31, offsetY31)
	  .draw(target32Img, offsetX32, offsetY32)
	  .draw(target33Img, offsetX33, offsetY33)
	  .draw(target4Img, offsetX4, offsetY4)
	  .draw(target5Img, offsetX5, offsetY5)
	  .draw(target8Img, offsetX8, offsetY8)
	  .draw(target6Img, offsetX6, offsetY6)
	  .draw(target7Img, offsetX7, offsetY7)
	  .save('./public/certifications/'+number+"a"+random+'.png', { quality : 50 });
	  console.log(number+"a"+random+".png");
	})().catch(e => console.error(e));
}

exports.certification = certification;
