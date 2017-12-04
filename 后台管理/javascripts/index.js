$(function() {
	
	
	
	
				
	
	
	
	
	
	

	//input文件选择
	$("input[type=file]").change(function() {
		$(this).parents(".uploader").find(".filename").val($(this).val());
	});
	$("input[type=file]").each(function() {
		if($(this).val() == "") {
			$(this).parents(".uploader").find(".filename").val("No file selected...");
		}
	});

	//input 属于类型验证
	//网站地址验证
	$("#input_type_url").blur(function() {
		var url = document.getElementById("input_type_url").value;
		var reg = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/;
		if(!reg.test(url)) {

			$("#input_type_url_error").fadeIn();

		} else {
			$("#input_type_url_error").fadeOut();
		}

	})

	//手机号验证
	$("#input_type_tel").blur(function() {

		if(!/^1[3|4|5|8][0-9]\d{4,8}$/.test($("#input_type_tel").val())) {

			$("#input_type_tel_error").fadeIn();

		} else {
			$("#input_type_tel_error").fadeOut();
		}

	})
	//手机号验证
	$("#input_type_tel2").blur(function() {

		if(!/^1[3|4|5|8][0-9]\d{4,8}$/.test($("#input_type_tel2").val())) {

			$("#input_type_tel2_error").fadeIn();

		} else {
			$("#input_type_tel2_error").fadeOut();
		}

	})
	//数字验证
	$("#input_type_height").blur(function() {

		if(!/^[0-9]*$/.test($("#input_type_height").val())) {

			$("#input_type_height_error").fadeIn();

		} else {
			$("#input_type_height_error").fadeOut();
		}

	})
	//数字验证
	$("#input_type_width").blur(function() {

		if(!/^[0-9]*$/.test($("#input_type_width").val())) {

			$("#input_type_width_error").fadeIn();

		} else {
			$("#input_type_width_error").fadeOut();
		}

	})
	//传真验证
	$("#input_type_chuanzhen").blur(function() {

		if(!/^(\d{3,4}-)?\d{7,8}$/.test($("#input_type_chuanzhen").val())) {

			//		 	$("#input_type_chuanzhen_error").fadeIn();

		} else {
			//		 	$("#input_type_chuanzhen_error").fadeOut();
		}

	})

	//邮箱验证
	$("#input_type_email").blur(function() {

		if(!/^\w+@[a-z0-9]+\.[a-z]+$/i.test($("#input_type_email").val())) {

			$("#input_type_email_error").fadeIn();

		} else {
			$("#input_type_email_error").fadeOut();
		}

	})

	//水印图片位置选择
	$(".set_img_position").children().click(function() {

		$(".set_img_position").children().css("background", "#EEEEEE")
		$(this).css("background", "#259BFF")

	})

	//全选反选
	$("#all_input").click(function() {

		var thi = $(".lm_checkbox");

		if(this.checked == true) {

			for(var l = 0; l < thi.length; l++) {
				thi[l].checked = true;
			}
		} else if(this.checked != true) {

			for(var l = 0; l < thi.length; l++) {
				thi[l].checked = false;
			}
		}

	})
	
	
	
	var th=true;
	//查看模板
	$(".btn-xs").click(function(){
		
		if(th==true){
			open_th();
		}
		else{
			close_th();
		}
		var ck=$(".btn-xs");
		var dm=$(".this_model_fadout");
		
		
		function open_th(){
			$(".this_model_fadout").hide();
			$(".this_model_fadout").eq($(this).index()).fadeIn();
			$(this).html("收起");
			th=false;
			
		}
		function close_th(){
			$(".this_model_fadout").hide();
			$(this).html("查看");
			th=true;
		}
		
	})
	
	
	
	
	
	
	

})