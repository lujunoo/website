// JavaScript Document

/**   跳滑效果   **/
$(window).load(function() {
	$("html,body").animate({ scrollTop: 0 }, 0)
	var url = window.location.toString();

	var id = url.split("#")[1];

	if(id) {
		var t = $("#" + id).offset().top;
		$("html,body").animate({ scrollTop: t }, 1000)
	}

	$('a').click(function() {
		if($(this).attr("href").split("#")[1]) {

			var a = $(this).attr("href").split("#")[1];
			var p = $("#" + a).offset().top;
			$("html,body").animate({ scrollTop: p }, 1000);
		}
	})
})

/**   二级导航   **/
$(function() {
	$('.nav_list').hover(function() {
		$(this).find('.f-dropdown').stop(true, true).fadeIn(600);
	}, function() {
		$(this).find('.f-dropdown').stop(true, true).fadeOut(600);
	});
});

/**  定位导航  **/

$(function() {

	var h = $(window).height();
	var w = $(window).width();

	if(w > 1440 && w <= 1920) {
		$(window).scroll(function() {
			var scrollHeight = $(document).scrollTop();
			if(scrollHeight > 0.5 * h) {
				$('.mbxdh').addClass('mbxdh2');

			} else {
				$('.mbxdh').removeClass('mbxdh2');
			}
		})

	} else if(w < 1440) {
		$(window).scroll(function() {
			var scrollHeight = $(document).scrollTop();
			if(scrollHeight > 0.5 * h) {
				$('.mbxdh').addClass('mbxdh2');
			} else {
				$('.mbxdh').removeClass('mbxdh2');
			}
		})

	}

})

$(window).load(function() {
	var h = $(" .in_banner img").height();

	$("#hp").css("height", h)
	$("#hp_hero_wrapper").css("height", h)

})

$(document).ready(function() {
	var h = $(" .in_banner img").height();

	$("#hp").css("height", h)
	$("#hp_hero_wrapper").css("height", h)

})

$(window).resize(function() {
	var h = $(" .in_banner img").height();

	$("#hp").css("height", h)
	$("#hp_hero_wrapper").css("height", h)

})

$(document).ready(function() {
	$(".yuanc_xz_one").hover(function() {
		$(this).find('.bg_txt_one').stop().fadeIn();
	}, function() {
		$(this).find('.bg_txt_one').stop().fadeOut()
	})

	$(".yuanc_xz_two").hover(function() {
		$(this).find('.bg_txt_two').stop().fadeIn();
	}, function() {
		$(this).find('.bg_txt_two').stop().fadeOut()
	})

	$(".yuanc_xz_three").hover(function() {
		$(this).find('.bg_txt_three').stop().fadeIn();
	}, function() {
		$(this).find('.bg_txt_three').stop().fadeOut()
	})

	$(".yuanc_xz_four").hover(function() {
		$(this).find('.bg_txt_four').stop().fadeIn();
		$('.yuanc_xz_four').css("z-index", "9");
	}, function() {
		$(this).find('.bg_txt_four').stop().fadeOut();
		$('.yuanc_xz_four').css("z-index", "1");
	})

	$(".yuanc_xz_five").hover(function() {
		$(this).find('.bg_txt_five').stop().fadeIn();
		$('.yuanc_xz_five').css("z-index", "9");
	}, function() {
		$(this).find('.bg_txt_five').stop().fadeOut();
		$('.yuanc_xz_five').css("z-index", "1");
	})

	$(window).scroll(function() {
		if($(window).scrollTop() > ($(".yuanc_top_con").offset().top - 200)) {
			$(".yuanc_top_con_left").animate({
				"left": "5%",
				"opacity": "1"
			}, 800)

			$(".yuanc_top_con_right").animate({
				"right": "5%",
				"opacity": "1"
			}, 800)

			$(".yuanc_top_con_right_xia").delay(500).animate({
				"right": "5%",
				"opacity": "1"
			}, 1000)

			$(".yuanc_top_con_left_xia").delay(500).animate({
				"left": "5%",
				"opacity": "1"
			}, 1000)

		}
	})

})