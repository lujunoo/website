$(function() {
	
	//登陆
	$("#username").blur(function(){
		
		if($(this).val()==""){
			$("#username").css("border","solid red 1px");
			return false;
		}
		else{
			$("#username").css("border","solid #00F5FF 1px");
			return true;
		}
		
	})
	$("#password").blur(function(){
		
		if($(this).val()==""){
			$("#password").css("border","solid red 1px");
			return false;
		}
		else{
			$("#password").css("border","solid #00F5FF 1px");
			return true;
		}
		
	})
	$(".btn").click(function(){
		var username=$("#username").val();
		var pass=$("#password").val();
		
		if(username==""){
			$("#username").css("border","solid red 1px");
			return false;
		}
		
		else if(pass==""){
			
			$("#password").css("border","solid red 1px");
			return false;
		}
		
		else{
			
			window.location.href="index.html";
		}
	
	})
	
	
	$(".back").click(function(){
		
		window.location.href="login.html";
		
	})
	
	
	//首页
	
	
	//左侧菜单
	$(".level1>a").click(function() {
		$(this).addClass('current') //给当前元素添加"current"样式
			.find('i').addClass('down') //小箭头向下样式
			.parent().next().slideDown('slow', 'easeOutQuad') //下一个元素显示
			.parent().siblings().children('a').removeClass('current') //父元素的兄弟元素的子元素去除"current"样式
			.find('i').removeClass('down').parent().next().slideUp('slow', 'easeOutQuad'); //隐藏
		return false; //阻止默认时间
	});

	//主页切换
	$(".level2").children("li").click(function() {
		$("iframe").attr("src", $(this).attr("link"));
		$(".level2 a").css("color", "white");
		$(this).children("a").css("color", "#00F5FF");

	})
	//手机版主页切换
	$(".ph_menu_ul_li").click(function() {
		$("iframe").attr("src", $(this).attr("link"));
		$(".index_main_ph_menu").css("display", "none");

	})

	//手机版菜单
	$(".index_main_top_ph_icon").click(function() {
		$(".index_main_ph_menu").toggle({
			height: "300px"
		});

	})
	//手机版子级菜单
	$(".ph_click").click(function() {
		$(".ph_menu_ul").hide();
		$(this).next(".ph_menu_ul").show();
	})

	//列表首行
	$(".role_table tr").eq(0).css({
		"height": "40px",
		"line-height": "40px",
		"background": "rgba(0,245,255,0.2)",
		"color": "#00F5FF",
	})


		$(".Save_info").hover(
			function(){
				$(this).addClass("Save_info_active");
			},
			function(){
				$(this).removeClass("Save_info_active");
			}
			
			
		)
		

	//意向客户详情查看
	$(".wc_look").hover(

		function(e) {
			//获取当前鼠标的位置
			var xx = e.originalEvent.x || e.originalEvent.layerX || 0;
			var yy = e.originalEvent.y || e.originalEvent.layerY || 0;
			var width = $(".look_info").width();
			var right = xx - width;
			//创建弹出窗口
			$(".look_info").css({
				"top": yy + "px",
				"left": right - 20 + "px",
			}).fadeIn();
		},
		function() {
			$(".look_info").hide();
		}

	)
	//意向客户数量
	$(".yxkh_count").hover(
		function(e) {

			var xx = e.originalEvent.x || e.originalEvent.layerX || 0;
			var yy = e.originalEvent.y || e.originalEvent.layerY || 0;
			var width = $(".yxkh_div").width();
			var right = xx - width;
			var i = $(this).children("input").val();
			//创建弹出窗口
			$(".yxkh_div").css({
				"top": yy + "px",
				"left": right - 60 + "px",
			}).fadeIn();
			if(i == 0) {
				$(".yxkh_div").html("今天Ta还没有意向客户噢！！！")
			} else {
				$(".yxkh_div").html("一共有" + i + "个意向客户")
			}
		},
		function() {
			$(".yxkh_div").hide();
		}
	)

	//全选反选
	$(".checked_CH").click(function() {
		var ch = $(this).parent().nextAll().children(".checked_ch");
		for(var i = 0; i <= ch.length; i++) {
			this.checked == true ? ch[i].checked = true : ch[i].checked = false;
		}

	})

	//意向客户添加删除
	$(".Clients_add_table").click(function() {

		var table = $(".Clients_add_table_parent").children("td").eq(1).html();
		var table_tr = "<tr><td class='Clients_delet_table'>[删除]</td><td colspan='12'>" + table + "</td></tr>";
		$(".Clients_add_table_parent").after(table_tr);

		$(".Clients_delet_table").click(function() {
			$(this).parent().remove();

		})

	})

})

//全选反选
function allcheck(obj) {

	var all_check = document.getElementsByClassName("checked");

	for(var i = 0; i <= all_check.length; i++) {
		obj.checked == true ? all_check[i].checked = true : all_check[i].checked = false;
	}

}
//加载完成后实行脚本
window.onload = function() {
	window.onresize = adjust;
	adjust();
}
//监听窗口大小---改变table布局
function adjust(e) {
	var width = document.body.clientWidth;
	if(width < 900) {
		$(".hide_td").addClass("hide");
		$(".role_Edit_fp").css("border", "#00F5FF solid 1px");
		$(".order_add_title").css({
			"padding-right": "20px",
			"width": "35%"
		});
		$(".order_add_info").css({
			"text-align": "left",
			"width": "65%",

		});
	} 
	else if(width > 900) {
		$(".hide_td").removeClass("hide");
//		$(".hide_td").css("border", "none");
	}



}