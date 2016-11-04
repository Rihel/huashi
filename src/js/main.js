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
var a=$('.huashiwenp').html();
var str='';
for(var i in a){
	str+='<span class="items items-right text-right" style="display:inline-block;transition-delay: '+(0.2*i).toFixed(1)+'s;">'+a[i]+'</span>'
}
$('.huashiwenp').html(str);
$('#fullpage').find('.section').not('.banner').addClass('height')
// items($('.youhui-icon'),'img');
// items($('.project-item'),'img');
// items($('.iossec .row'),'div');
// items($('.youhui'),'a');
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
		console.log(num)
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
	

((function($,win,doc,underfine){
	var meath={
		isSee:function(obj){
			var imgh=$(obj).offset().top,
				scrolh=$(win).scrollTop(),
				winh=$(win).height();
			return scrolh+winh>imgh;
		},
		init:function(self,opt){
			var items=self.find('.items');
			$(win).scroll(function(){
				$(items).each(function(i,ele){
					if(meath.isSee($(ele))&&!$(ele).hasClass('active')){
						$(ele).addClass('active');
					}
				})
			})
		}
	}
	$.fn.scrollactive=function(options){
		var def={
		};
		this.settings=$.extend(def,options);
		return meath.init(this,this.settings);
	}
})(jQuery,window,document));
$('#fullpage').scrollactive();

;(function($,win,doc,underfine){
	var menth={
		init:function(self,opt){
			var warp=$(self).find('.car-warp');
			var view=$(self).find('.car-view');
			view.find('li.car-img').eq(0).fadeIn()
			var control=$(self).find('.car-control');
			menth.controlInit(control,view,opt);
			if(opt.auto){
				menth.autoplay(view,control,opt)
			}
		},
		imgSize:function(view){
			return $(view).find('.car-img').length;
		},
		autoplay:function(view,control,opt){
			var i=opt.active;
			var corl=control.find('li');
			var viewItem=view.find('.car-img');
			var size=viewItem.length;
			setInterval(function(){
				if(i<size){
					viewItem.fadeOut();
					viewItem.eq(i).fadeIn();
					corl.removeClass('active');
					corl.eq(i).addClass('active');
					i++;
				}else {
					i=0;
				}
			},opt.time)
		},
		controlInit:function(control,view){
			var size=menth.imgSize(view);
			var str='';
			for(var i=0;i<size;i++){
				str+='<li>'+(i+1)+'</li>'
			};
			control.html(str);
			control.find('li').eq(0).addClass('active');
			menth.hover(control,view);
		},
		hover:function(control,view,opt){
			control.delegate('li','mouseover',function(){
				$(view).find('li.car-img').css('zIndex',8).fadeOut(300);
				$(control).find('li').removeClass('active');
				$(this).addClass('active');
				$(view).find('li.car-img').eq($(this).index()).css('zIndex',9).fadeIn(300);
				opt.active=$(this).index();
			})
		}
	}
	$.fn.caro=function(options){
		var def={
			active:0,
			time:4000
		};
		this.settings=$.extend({},def,options);
		return menth.init(this,this.settings);
	}
}(jQuery,window,document));
$('.student-carusel').caro({
	auto:true,
	time:2000
});














