/**
 * *************作品展示说明************
 * showworks 				开始
 *  sw-title  				标题文字
 *  	sw-h2  				标题
 *  	sw-p				段落
 *  sw-main   				作品主要展示区域
 *  	sw-crol-small-view	侧边控制
 *  		sw-type
 *  		sw				每个小图片
 *  	sw-main-big-view    主要现实区域
 *  		sw-tab			选项卡
 *  		sw-view			大图显示
 *
 *
 *
 *
 *
 */


(function($,win,doc){
	var meath={
		init:function(self,opt){
			//获取title
			var Title         = self.find('.sw-title'),
				h2            = self.find('.sw-h2'),
				p             = self.find('.sw-p'),
				//获取main
				main          = self.find('.sw-main'),
				crolSmallView = self.find('.sw-crol-small-view'),
				swtype        = self.find('.sw-type')
				sws = self.find('.sw'),
				mainBigView = self.find('.main-big-view '),
				tab = self.find('.sw-tab'),
				view = self.find('.sw-view');
			for(var i=0;i<opt.data.length;i++){
				var item=opt.data[i];
				meath.tabinit(tab,item,h2,p,swtype,crolSmallView,view);
			}
			var href=win.location.href;
			var attr=href.split('#')[1];
			var init={};
			for(var i=0;i<opt.data.length;i++){
				var dd=opt.data[i];
				if(dd.key===attr){
					init=dd;
					break;
				}else {
					init=opt.data[0];
					$(tab).find('li').eq(0).addClass('active');

				}
			}
			console.log(init);
			$(h2).html(init.title);
			$(swtype).html(init.title);
			$(p).html(init.p);
			$(tab).find('li').each(function(i,e){
				if($(e).attr('key')===attr){
					$(tab).find('li').removeClass('active');
					$(e).addClass('active');
				}
			})
			meath.render(init,crolSmallView,view);
			meath.tihuan($(crolSmallView).find('.sw').eq(0),view);

		},
		tabinit:function(tab,item,h2,p,swtype,crolSmallView,view){
			var tem=$('<li key="'+item.key+'">'+item.title+'</li>');
			$(tem).appendTo($(tab));
			meath.tabtoggle(tem,item,h2,p,swtype,crolSmallView,view)
		},
		tabtoggle:function(tem,item,h2,p,swtype,crolSmallView,view){

			$(tem).click(function(){
				$(crolSmallView).html('')
				$(this).parent().find('li').removeClass('active');
				$(this).addClass('active');
				$(h2).html(item.title)
				$(swtype).html(item.title)
				$(p).html(item.p);

				meath.render(item,crolSmallView,view);
			})
		},
		render:function(item,crolSmallView,view){
			for(var i=0;i<item.imgs.length;i++){
				var url=item.imgs[i];
				var b=$('<div class="sw"><img class="img-responsive" src="'+url+'"/></div>')
				b.appendTo($(crolSmallView));
				$(view).find('img').attr('src',item.imgs[0]);
				meath.imgtoggle(b,view);
			}
			$(crolSmallView).animate({
				scrollTop:0
			})
		},
		imgtoggle:function(item,view){
			$(item).click(function(){
				meath.tihuan($(this),view);
			})
		},
		tihuan:function(self,view){
			var url=self.find('img').attr('src');
			$(view).find('img').attr('src',url);
		}
	}
	$.fn.showworks=function(options){
		var def={
			data:[]
		};
		this.settings=$.extend(def,options);
		return meath.init(this,this.settings);
	}
}(jQuery,window,document))