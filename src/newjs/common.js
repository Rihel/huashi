$(function(){
	$.get('/common/header.html',function(data){
		$('.main').before(data);
		$('.nav li').hover(function(){
			$(this).stop().animate({
				top:'-43px'
			})
		},function(){
			$(this).stop().animate({
				top:'0'
			})
		});
		$('.carousel').carousel({
			interval: 2000
		})
	});
	$.get('/common/footer.html',function(data){
		$('.main').after(data);

	});


	items($('.main'),'*');
	$('.halfyear').scrollactive()
})
function items(par,tag,animName){
	var animates=['bounce','pulse','swing','rubberBand','shake','tada','wobble','jello'];
	
	par.delegate(tag,'mouseover',function(even){

		if($(this).hasClass('animated')){
			$(this).addClass(animates[Math.floor(Math.random()*animates.length)])
		}
	});
	par.delegate(tag,'mouseout',function(even){
		if($(this).hasClass('animated')){
			$(this).attr('class','animated');
		}
	});
}
function browserV(){
	var browser=window.navigator.userAgent
	var isOpera=browser.indexOf('Opera')>-1;
	var isIE = browser.indexOf("compatible") > -1 && browser.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
	var isEdge = browser.indexOf("Windows NT 6.1; Trident/7.0;") > -1 && !isIE; //判断是否IE的Edge浏览器
	var isFF = browser.indexOf("Firefox") > -1; //判断是否Firefox浏览器
	var isSafari = browser.indexOf("Safari") > -1 && browser.indexOf("Chrome") == -1; //判断是否Safari浏览器
	var isChrome = browser.indexOf("Chrome") > -1 && browser.indexOf("Safari") > -1; //判断Chrome浏览器

	if (isIE){
		var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
		reIE.test(browser);
		var fIEVersion = parseFloat(RegExp["$1"]);
		if(fIEVersion == 7)
		{ return "IE7";}
		else if(fIEVersion == 8)
		{ return "IE8";}
		else if(fIEVersion == 9)
		{ return "IE9";}
		else if(fIEVersion == 10)
		{ return "IE10";}
		else if(fIEVersion == 11)
		{ return "IE11";}
		else
		{ return "0"}//IE版本过低
	}//isIE end
	if (isFF) {  return "FF";}
	if (isOpera) {  return "Opera";}
	if (isSafari) {  return "Safari";}
	if (isChrome) { return "Chrome";}
	if (isEdge) { return "Edge";}
}
function isIE(browers){
	if(/IE/g.test(browers)){
		console.log(browers.indexOf('IE'))
		var a=browers.split('IE');
		var b=parseInt(a[1]);
		if(b<=9){
			return true
		}else {
			return false;
		}
	}else {
		return false;
	}
}
function removeClass(obj,cls){
	var a=document.getElementsByTagName('*');
}
function IEinit(items){
	var len=items.length;
	for(var i=0;i<len;i++){
		var item=items[i];
		var clas=dirpanduan(item,'start');
		if(clas!=='underfine'){
			$(item).removeClass(clas).css('opacity',1);
		}
	}
}
function dirpanduan(item,type){
	if(type=='start'){
		if($(item).hasClass('items-left')){
			return 'items-left'
		}else if($(item).hasClass('items-right')){
			return 'items-right'
		}else if($(item).hasClass('items-top')){
			return 'items-top'
		}else if($(item).hasClass('items-bottom')){
			return 'items-bottom'
		}if($(item).hasClass('items-scale')){
			return 'items-scale'
		}
	}
}