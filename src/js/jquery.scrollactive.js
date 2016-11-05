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
			$(items).attr('anim',false);
			var browers=meath.browserV();
			if(meath.isltIE(browers)){
				meath.IEinit(items,opt);

				meath.IEanimation(items,opt);
			}else {
				$(win).scroll(function(){
					$(items).each(function(i,ele){
						if(meath.isSee($(ele))&&!$(ele).hasClass('active')){
							$(ele).addClass('active');
						}
					})
				});
			}

		},
		IEanimation:function(items,opt){
			var len=items.length;
			$(win).scroll(function(){
				for(var i=0;i<len;i++){
					var ele=items[i];
					if(meath.isSee($(ele))){
						var css=meath.dirpanduan(ele,opt,'end');
						if(css!==underfine){
							console.log(!!$(ele).attr('anim'));
							if(!!$(ele).attr('anim')){
								meath.animate(ele,css)
							}
						}
					}
				}
			});
		},
		animate:function(ele,css){
			$(ele).animate(css,700);
			$(ele).attr('anim',true)
		},
		//判断是ie10以下版本
		isltIE:function(browers){
			var a=parseInt(browers[browers.length-1]);
			if(isNaN(a)){
				return false;
			}else if(a<=10){
				return true;
			}
		},
		//如果是ie10那么进行样式初始化
		IEinit:function(items,opt){
			var len=items.length;
			for(var i=0;i<len;i++){
				var item=items[i];
				var css=meath.dirpanduan(item,opt,'start');
				if(css!==underfine){
					$(item).css(css);
				}
			}
		},
		//动画方向判断
		dirpanduan:function(item,opt,type){
			var opt=opt.css;
			if(type=='start'){
				if($(item).hasClass('items-left')){
					return opt.startleft
				}else if($(item).hasClass('items-right')){
					return opt.startright
				}else if($(item).hasClass('items-top')){
					return opt.starttop
				}else if($(item).hasClass('items-bottom')){
					return opt.startbottom
				}
			}else if(type=='end'){
				if($(item).hasClass('items-left')){
					return opt.endleft
				}else if($(item).hasClass('items-right')){
					return opt.endright
				}else if($(item).hasClass('items-top')){
					return opt.endtop
				}else if($(item).hasClass('items-bottom')){
					return opt.endbottom
				}
			}
		},
		//获取浏览器内核
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
			css:{
					startleft:{marginLeft:'-1000px'},
					endleft:{marginLeft:0,opacity:1},
					starttop:{mariginTop:'-300px'},
					endtop:{mariginTop:0,opacity:1},
					startbottom:{marginBottom:'300px'},
					endbottom:{marginBottom:0,opacity:1},
					startright:{marginRight:'1000px'},
					endright:{marginRight:0,opacity:1},

				}
		};
		this.settings=$.extend(def,options);
		return meath.init(this,this.settings);
	}
})(jQuery,window,document));