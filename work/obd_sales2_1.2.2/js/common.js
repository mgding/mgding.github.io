var postIp = 'http://obd.mapbar.com/';

//var postIp_pro = 'http://obd.mapbar.com/shop/';
//var postIp_order = 'http://obd.mapbar.com/shop/';
//var postIp_pay = 'http://obd.mapbar.com/shop/';
//var postIp_cdy = 'http://obd.mapbar.com/shop/';
//var postIp_alipay = 'https://buy.mapbar.com/';
//var postIp_alipay = 'http://192.168.0.111:8021/';

var postAlipay = 'http://192.168.0.111:8021/services/paymentType/alipay/gatewapway';

var postGetPro = 'http://192.168.85.29:8512/obd/newpay/getOneGoods';
var postCDK = 'http://192.168.85.29:8512/obd/newpay/getActiveStatus';
var postSubmitOrder = 'http://192.168.85.29:8512/obd/newpay/submitOrder';

var postPrize = 'http://192.168.85.29:8722/obdactive/prize/handleLottery';
var postChance = 'http://192.168.85.29:8722/obdactive/prize/getCount';
var postUpdateCount = 'http://192.168.85.29:8722/obdactive/prize/updateCount';
var postGetTickets = 'http://192.168.85.29:8722/obdactive/prize/listWinPrize';
var postGetPrzie = 'http://192.168.85.29:8722/obdactive/prize/getOnePrizeById';
var postFreePrize = 'http://192.168.85.29:8722/obdactive/prize/freePrizeOrder';
var postVQuestionnaire = 'http://192.168.85.29:8722/obdactive/prize/getLotteryCountByMac';

/*url中的search*/
function Search(){
	var search = window.location.search.substring(1);
	var arr = search.split('&');
	for(var i=0; i<arr.length; i++){
		var arr2 = arr[i].split('=');
		this[arr2[0]] = arr2[1];
	}
	//this._host = window.location.protocol + '//' + window.location.pathname.substring(0,window.location.pathname.lastIndexOf('/')+1);
}
var oSearch = new Search();

/*取n到m随机数*/
function rdn(n,m){return parseInt(Math.random()*(m-n+1)+n)}

/*打开弹出层*/
function dialog(opt){
	if(typeof opt == 'string'){
		$('<div class="dialogMask"></div>').appendTo('body');
		$('#'+opt).show();
	}else{
		var win = $('<div class="dialogMask"></div><div class="dialog"><div class="diaContent">'+opt.msg+'</div><div class="diaBtn cf"><a class="diaBtn1" href="javascript:;" onclick="closeDialog();">确 定</a></div>').appendTo('body');
	}
}

/*关闭弹出层*/
function closeDialog(opt){
	if(opt){
		$('#'+opt).hide();
	}else{
		$('.dialog').remove();
	}
	$('.dialogMask').remove();
}

/*统一ajax返回类型*/
function data2json(data){
	if(typeof data == 'string'){
		return eval('('+data+')');//JSON.parse(data)
	}else{
		return data;
	}
}

//cookie操作
function addCookie(name,value,iDay){
	var oDate=new Date();
	oDate.setDate(oDate.getDate()+iDay);
	document.cookie=name+'='+value+';path=/;expires='+oDate;
}

function getCookie(name){
	var arr=document.cookie.split('; ');
	for(var i=0;i<arr.length;i++){
		var arr2=arr[i].split('=');
		if(arr2[0]==name){
			return arr2[1];
		}
	}
	return '';
}

function delCookie(name){
	addCookie(name,'1',-1)
}

//统计代码0.164
// var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
// document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3F339e13f403e4b5c6de449f1c796c8588' type='text/javascript'%3E%3C/script%3E"));

//统计代码http://mobile.mapbar.com/
var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3F8e659093a54daf606081f62acfeb73fa' type='text/javascript'%3E%3C/script%3E"));