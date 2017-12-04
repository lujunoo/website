;
(function($) {
	$.fn.extend({
		TheShow: function(proBOX,probox,proOption) {
			var proBOX = document.getElementsByClassName(proBOX)[0];
			var probox = proBOX.getElementsByClassName(probox)[0];
			var proul = probox.getElementsByTagName("ul");
			var proOption = document.getElementsByClassName(proOption)[0];
			var proOptionItem = proOption.getElementsByTagName("span");
			var stop = null;
			var item_i = 0;
			var Index;
			var move = -(proul[0].offsetWidth-7);
			probox.style.width = proul.length * proul[0].offsetWidth + "px";
			stop = setInterval(productShow, 5000);
			function productShow() {
				if(item_i > (proul.length - 1)) {
					item_i = 0;
				}
				for(var i = 0; i < proOptionItem.length; i++) {
					proOptionItem[i].setAttribute("class", "");
					proOptionItem[item_i].setAttribute("class", "active");
				}
				probox.style.left = move * item_i + "px";
				item_i++;
			}
			for(var k = 0; k < proOptionItem.length; k++) {
				proOptionItem[k].index = k;
				proOptionItem[k].onmousemove = function() {
					clearInterval(stop);
				}
				proOptionItem[k].onmouseout = function() {
					stop = setInterval(productShow, 5000);
				}
				proOptionItem[k].onclick = function() {
					for(var n = 0; n < proOptionItem.length; n++) {
						proOptionItem[n].setAttribute("class", "");
						proOptionItem[this.index].setAttribute("class", "active");
					}
					probox.style.left = move * this.index + "px";
				}
			}
		}
	})
})(jQuery)