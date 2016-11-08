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
$(function(){

	// $('#fullpage').fullpage({
// 	//section背景颜色
// 	//sectionsColor:['green','orange','gray','red'],
// 	//是否使用箭头控释slide幻灯片
// 	controlArrows:true,
// 	//每一页的内容是否垂直居中
// 	verticalCentered:false,
// 	//字体是否随着窗口缩放而缩放
// 	resieze:true,
//
// 	//滚动速度，单位为毫秒，默认为700
// 	scrollingSpeed:800,
// 	//定义锚连接，默认为空，可以快速定位到某一个页面
// 	anchors:['page1','page2','page3','page4','page5','page6','page7','page8'],
// 	//是否使用CSS3属性来实现滚动效果
// 	css3:true,
//
// 	//滚动到顶部后是否滚到底部
// 	loopTop:false,
// 	//滚动到底部后是否滚到顶部
// 	loopBottom:true,
// 	//横向slider幻灯片是否循环滚动
// 	loopHorizontal:true,
// 	//固定的元素，页面滚动的时候 元素固定不东
// 	//fixedElements:'#header',
// 	// paddingTop:'122px',
// 	// paddingBottom:'44px',
// 	//绑定菜单
// 	//menu:'#header',
//
// 	navigation:true,
// 	navigationPosition:'right',
// 	afterLoad:function(anchorLink,index){
// 		console.log('进入的页面为'+anchorLink, index);
// 		$('.section').eq(index).find('.items').removeClass('active');
// 	},
// 	onLeave:function(index,nextIndex,direction){
// 		console.log(index, nextIndex, direction);
//
// 		$('.section').eq(index).find('.items').toggleClass('active');
// 	}
// });
// $.fn.fullpage.destroy('all');
	$('.carousel').carousel({
		interval: 2000
	})
	if(isIE(browserV())){
		IEinit($('.items'));
	}else {


		var a=$('.huashiwenp').html();
		var str='';
		for(var i in a){
			str+='<span class="items items-right text-right" style="display:inline-block;transition-delay: '+(0.02*i).toFixed(1)+'s;">'+a[i]+'</span>'
		}
		$('.huashiwenp').html(str);
		$('#fullpage').scrollactive();
	}
	$('#fullpage').find('.section').not('.banner').addClass('height')
	items($('#fullpage'),'*');
	function items(par,tag,animName){
		var animates=['bounce','pulse','swing','rubberBand','shake','tada','wobble','jello'];
		var num=Math.floor(Math.random()*animates.length);
		par.delegate(tag,'mouseover',function(even){

			if($(this).hasClass('animated')){
				$(this).addClass(animates[num])
			}
		});
		par.delegate(tag,'mouseout',function(even){
			if($(this).hasClass('animated')){
				$(this).removeClass(animates[num])
			}
		});
	}
	$('.trade').delegate('div.joy','mouseover',function(){
		$(this).find('.thumbnail').addClass('active');
		$(this).find('.icons').addClass('active');
	});
	$('.trade').delegate('div.joy','mouseout',function(){
		$(this).find('.thumbnail').removeClass('active');
		$(this).find('.icons').removeClass('active');
	});

	$('.student-carusel').caro({
		auto:true,
		time:2000
	});
	$('.nav li').hover(function(){
		$(this).stop().animate({
			top:'-43px'
		})
	},function(){
		$(this).stop().animate({
			top:'0'
		})
	})




















})