/*
	author by johnny.jiang 
	version v1.0
*/
var Slider = function() {
		var _$self = this;
		var cur = 0;
		var tag = ".pstu";
		var count=$(tag).find("img").length;

		var go = function(index) {
			console.log(index);
			var src=$(tag).find('img').eq(index).attr("bigsrc");
			$("#mask").find('img').attr("src",src)
		};

		//下一张
		var next = function() {
			if(cur==count-1)
			{
				go(0);
				cur=0;
			}
			else
			{
				go(++cur);

			}
		};

		//上一张
		var prve = function() {
			if(cur==0)
			{
				go(count-1);
				cur=count-1;
			}else
			{
				go(--cur);
			}
		};
		
		var itemClick=function() {
			$(tag).find('img').click(function(event) {
				cur = $(this).index();
				console.log(cur);
				var src = $(this).attr("bigsrc");
				$("#mask .big").attr("src", src);
				$("#mask").fadeIn();
			});
		};


		//阴影
		var Mask = function() {
			$('<div id="mask" style="display:none;position: fixed;width:100%;height:100%;top: 0;z-index: 9999;"><div style="position: absolute;width:100%;height:100%;background: rgba(0,0,0,0.5);"></div><a class="close" style="position: absolute; left: 0px; z-index: 1000;">&times</a><div class="bigimg" style="position:relative;width:1000px;margin:0 auto;z-index: 2000;margin-top: 100px;"> <img class = "big" /><a class = "prve"	style = "position: absolute;left: -50px;"> << </a><a class="next" style="position: absolute;right: 50px;">>></a> </div></div >').appendTo('body').delegate('.close', 'click',function(){
				$("#mask").fadeOut();
			}).delegate('.next', 'click', function(event) {
				next();
			}).delegate('.prve', 'click', function(event) {
				 prve();
			});
		};

			return {
				init: function() {
					Mask();
					itemClick();
				},
			}
		};