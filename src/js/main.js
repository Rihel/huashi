$('#fullpage').fullpage({
	//section背景颜色
	sectionsColor:['green','orange','gray','red'],
	//是否使用箭头控释slide幻灯片
	controlArrows:true,
	//每一页的内容是否垂直居中
	verticalCentered:true,
	//字体是否随着窗口缩放而缩放
	resieze:false,

	//滚动速度，单位为毫秒，默认为700
	scrollingSpeed:1000,
	//定义锚连接，默认为空，可以快速定位到某一个页面
	anchors:['page1','page2','page3','page4','page5','page6','page7','page8'],
	//是否使用CSS3属性来实现滚动效果
	css3:true,

	//滚动到顶部后是否滚到底部
	loopTop:false,
	//滚动到底部后是否滚到顶部
	loopBottom:true,
	//横向slider幻灯片是否循环滚动
	loopHorizontal:true,


	//固定的元素，页面滚动的时候 元素固定不东
	fixedElements:'#header',

	//绑定菜单
	menu:'#header',

	navigation:true,
	navigationPosition:'right',

});