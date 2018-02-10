// JavaScript Document
//设置cookie
function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + "; " + expires;
};
//读取cookies 
function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1);
		if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
	}
	return "";
};
//清除cookie  
function clearCookie(name) {
	setCookie(name, "", -1);
};
//获取地址栏参数	 
function getParam(name) {  //获取参数
	var url = window.location.search;  //获取问号之后的字0符
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	if (url != null && url.toString().length > 1) {
		var r = url.substr(1).match(reg);
		if (r != null) return unescape(r[2]); return null;
	}
};
//调用方法  getParam("参数名")
//ajax请求 
$.ajaxs = function (url, data, successfn, errorfn) {
	data = (data == null || data == "" || typeof (data) == "undefined") ? { "data": new Date().getTime() } : data;
	$.ajax({
		url: url,
		type: "GET",
		data: data,
		dataType: "jsonp",
		jsonp: "jsoncallback",
		async: true,
		timeout: 10000,
		success: function (d) {
			//console.log(d)
			successfn(d);
		},
		error: function (e) {
			errorfn(e);
		}
	});
};
