((function($,win,doc,underfine){
	var meath={
		isSee:function(obj){
			var imgh=$(obj).offset().top+50,
				scrolh=$(win).scrollTop(),
				winh=$(win).height();
			return scrolh+winh>imgh;
		},
		init:function(self,opt){
			var items=self.find('.items');
			var browers=meath.browserV();
			meath.isltIE(items,browers)
			$(win).scroll(function(){
				$(items).each(function(i,ele){
					if(meath.isSee($(ele))&&!$(ele).hasClass('active')){
						$(ele).addClass('active');
					}
				})
			});
		},
		isltIE:function(items,browers){
			var a=parseInt(browers[browers.length-1]);
			console.log(a,browers[browers.length-1]);
			if(isNaN(a)){
				console.log('这个不是ie的浏览器');
			}else if(a<10){
				console.log('这个是ie浏览器 并且低于ie10');
			}
		},
		browserV:function(){
			var browser=win.navigator.userAgent
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
	}
	$.fn.scrollactive=function(options){
		var def={
		};
		this.settings=$.extend(def,options);
		return meath.init(this,this.settings);
	}
})(jQuery,window,document));