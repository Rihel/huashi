;(function($,win,doc,undefined){
	var meath={
		init:function(self,opt){
			self.delegate('*.lightbox','click',function(e){
				e.stopImmediatePropagation();
				var a=meath.getDate($(this));
				var lightbox=meath.render(a);
				lightbox.appendTo($('body'));
				meath.animates(lightbox)
				meath.close(lightbox)
			})
		},
		close:function(lightbox){
			lightbox.find('.lightbox-close').click(function(){
				lightbox.find('.lightbox-content').animate({'top':'-1000px'});
				setTimeout(function(){
					lightbox.remove()
				},200)
			})
		},
		animates:function(lightbox){
			lightbox.find('.lightbox-content').animate({'top':'50%'})
		},
		render:function(obj){
			var warp=$('<div class="lightbox-warp">'),
				mark=$('<div class="lightbox-mark">'),
				content=$('<div class="lightbox-content">'),
				close=$('<div class="lightbox-close fa fa-close"></div>')
				img=$('<div class="lightbox-img"><img src="'+obj.img+'" alt=""></div>'),
				text=$('<div class="lightbox-text">' +
					'<h2 class="lightbox-name">'+obj.name+'</h2>' +
					'<h2 class="lightbox-joy">'+obj.joy+'</h2>' +
					'<p>'+obj.text+'</p>' +
					'</div>');
			close.appendTo(content)
			img.appendTo(content);
			text.appendTo(content);
			mark.appendTo(warp);
			content.appendTo(warp);
			return warp;
		},
		getDate:function(lightbox){
			return {
				img:$(lightbox).find('img').attr('src'),
				name:$(lightbox).find('h3').eq(0).html(),
				joy:$(lightbox).find('h3').eq(1).html(),
				text:$(lightbox).find('p').html()
			}
		}
	}
	$.fn.lightbox=function(options){
		var def={

		};
		this.settings=$.extend(def,options);
		return meath.init(this,this.settings);
	}
}(jQuery,window,document));