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

				$(win).scroll(function(){
					$(items).each(function(i,ele){
						if(meath.isSee($(ele))&&!$(ele).hasClass('active')){
							$(ele).addClass('active');
						}
					})
				});
		},
	}
	$.fn.scrollactive=function(options){
		var def={

		};
		this.settings=$.extend(def,options);
		return meath.init(this,this.settings);
	}
})(jQuery,window,document));