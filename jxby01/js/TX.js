$(function() {
	
	function animotion1() {

		var c = document.getElementById("canvas");
		var ctx = c.getContext("2d");
		c.width = window.innerWidth;
		c.height = window.innerHeight;
		var string1 = "01abcdefghijklmnopqrstxyz";
		string1.split("");
		var fontsize = 20;
		columns = c.width / fontsize;
		var drop = [];
		for(var x = 0; x < columns; x++) {
			drop[x] = 0;
		}

		function drap() {
			ctx.fillStyle = "rgba(0,0,0,0.06)";
			ctx.fillRect(0, 0, c.width, c.height);
			ctx.fillStyle = "#00F5FF";
			ctx.font = fontsize + "px arial";
			for(var i = 0; i < drop.length; i++) {
				var text1 = string1[Math.floor(Math.random() * string1.length)];
				ctx.fillText(text1, i * fontsize, drop[i] * fontsize);
				drop[i]++;
				if(drop[i] * fontsize > c.height && Math.random() > 0.9) { //90%的几率掉落
					drop[i] = 0;
				}
			}
		}
		setInterval(drap, 20);

	}
	
		animotion1() 
		
		
		

})