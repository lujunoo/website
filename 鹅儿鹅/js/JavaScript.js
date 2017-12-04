

//滚动监听
//获取浮动模块div
var advisory = document.getElementsByClassName("contact-fixed")[0];
$(window).scroll(function() {
	var scrollTop = $(window).scrollTop();
	var rwidth = $(window).width()
	//咨询框显示影藏
	if(scrollTop < 300) {
		advisory.style.animation = "advisoryBack 0.5s forwards ";
	} else if(scrollTop > 300) {
		advisory.style.animation = "advisory 0.5s forwards ";
	}
});
//返回顶部
$("#goTop").click(function() {
	var sc = $(window).scrollTop();
	$('body,html').animate({
		scrollTop: 0
	}, 500);
})
$(".QRcode").hover(
	function() {
		$(".erweima").css("animation", "erwewima 0.3s forwards");
	},
	function() {
		$(".erweima").css("animation", "erwewima2 0.3s forwards");
	}
)


//企业简介按钮切换
$("#corporate span").click(function() {
	$("#corporate span").removeClass("active");
	$(this).addClass("active")
	$(".enterpriseItem").stop().hide(500);
	$(".enterpriseItem").eq($(this).index()).stop().show(500);

})

//人才招聘
$(".Recruitment-content").eq(0).show();
$("#position a").click(function() {
	$("#position a").removeClass("active");
	$(this).addClass("active");
	$(".Recruitment-content").stop().hide();
	$(".Recruitment-content").eq($(this).index()).stop().show();
})
//弹窗
$(".btn-default").click(function() {
	$(".window-coontact").fadeIn();
});
$(".window-coontact").click(function() {
	$(".window-coontact").fadeOut();
});
$(".window-content").click(function() {
	$(".window-coontact").fadeOut();
});