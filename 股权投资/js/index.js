$(function() {

	$(".col-md-3").hover(
		function() {
			$(this).children(".border_transition").css({
				"background": "#00A8FF",
				"transform": "scaleX(1)"
			});
		},
		function() {
			$(this).children(".border_transition").css({
				"background": "#00A8FF",
				"transform": "scaleX(0)"
			});
		}

	)

	var i = 0;
	var stop = null;

//时间点击事件
	$(".aaa").click(function(){
		
		 i=$(this).index()
		this_main_move(i);
		
	})
//箭头点击事件
	$(".About_fz_up").click(function() {
		i += 1;
		if(i > 5) {
			i = 0;
		}
		this_main_move(i);
	})
	$(".About_fz_down").click(function() {
		i -= 1;
		if(i < 0) {
			i = 5;
		}
		this_main_move(i);
	})
	

	//									stop=setInterval(this_main_move,1000);

	function this_main_move(e) {
		
		
		//年份
		$(".fzli_Timer").children().css({
			"color": "#848484",
			"background": "white"
		})
		$(".fzli_Timer").children().eq(i).css({
			"color": "#fff",
			"background": "#48c7ec"
		})
		//图片
		$(".fzlc_img").children().css({

			"display": "none"
		})
		$(".fzlc_img").children().eq(i).fadeIn();
		
		//文字
		$(".fzlc_text").css({
			"display": "none"
		})
		$(".fzlc_text").eq(i).fadeIn();
		//月份
		$(".fzlc_left_icon_moth").children().css({
			"color": "#B0B0B0",
		})
		$(".fzlc_left_icon_moth").children().eq(i).css({
			"color": "#48c7ec",
		})
		//圆圈
		$(".fzlc_left_icon").children().css({
			"border": " solid #E1E1E1 3px"
		})
		$(".fzlc_left_icon").children().eq(i).css({
			"border": " solid #48c7ec 3px"
		})
	}
	
	
	
	$(".our_service").css("filter","grayscale(100%)");
								$(".our_service_SER").css("filter","grayscale(100%)");
								$(".our_service").eq(0).css("filter","");
								$(".our_service_SER").hover(
									function(){
										$(".our_service").css("filter","grayscale(100%)");
										$(".our_service_SER").css("filter","grayscale(100%)");
										$(this).css("filter","");
									},
									function(){
										$(".our_service").css("filter","grayscale(100%)");
										$(".our_service_SER").css("filter","grayscale(100%)");
										
										$(".our_service").eq(0).css("filter","");
									}
								)
								$(".our_service").hover(
									function(){
										$(".our_service_SER").css("filter","grayscale(100%)");
										$(".our_service").css("filter","grayscale(100%)");
										$(this).css("filter","");
									},
									function(){
										$(".our_service_SER").css("filter","grayscale(100%)");
										$(".our_service").css("filter","grayscale(100%)");
										$(".our_service").eq(0).css("filter","");
									}
								)

})