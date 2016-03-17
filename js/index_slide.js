$(function(){
			var oDiv = $("#play");  //外部盒子
			var count = $("#play ul li").length;  //内部图片数量
			var countwidth = $("#play ul li").width();  //图片边框宽度
			var oUl = $("#play ul").css("width",count*countwidth);  //ul li总宽度
			var now = 0;
			var next = $("#next");
			var prev = $("#prev");
			//点击按钮数量
			//左右点击图片获取
			var nI = $("#play ul li:nth-child(2)").find("img").attr("src");
			var nLink = $("#play ul li:nth-child(2)").find("a").attr("href");
			var nIh3 = $("#play ul li:nth-child(2)").find("h3").html();
			var nIh4 = $("#play ul li:nth-child(2)").find("h4").html();
			$(".nextImg img").attr("src",nI);
			$(".nextImg").attr("href",nLink);
			$(".nextImg h3").html(nIh3);
			$(".nextImg h4").html(nIh4);
			var pI = $("#play ul li:last-child").find("img").attr("src");
			var pLink = $("#play ul li:last-child").find("a").attr("href");
			var pIh3 = $("#play ul li:last-child").find("h3").html();
			var pIh4 = $("#play ul li:last-child").find("h4").html();
			$(".prevImg img").attr("src",pI);
			$(".prevImg").attr("href",pLink);
			$(".prevImg h3").html(pIh3);
			$(".prevImg h4").html(pIh4);
			//按钮点击事件
			//图片循环事件
			function tab(index){
				now = index;
				oUl.stop(true,false).animate({"left":-353 * now},400);
			}
			//下一张按钮图片切换
			function nextImg(){
				var d = $("#play ul li").find("img").eq(now+1).attr("src");
				var pLink = $("#play ul li").find("a").eq(now+1).attr("href");
				var pIh3 = $("#play ul li").find("h3").eq(now+1).html();
				var pIh4 = $("#play ul li").find("h4").eq(now+1).html();
				var nI = $("#play ul li:nth-child(1)").find("img").attr("src");
				var nLink = $("#play ul li:nth-child(1)").find("a").attr("href");
				var nIh3 = $("#play ul li:nth-child(1)").find("h3").html();
				var nIh4 = $("#play ul li:nth-child(1)").find("h4").html();
				$(".nextImg").find("img").attr("src",d);
				$(".nextImg").attr("href",pLink);
				$(".nextImg").find("h3").html(pIh3);
				$(".nextImg").find("h4").html(pIh4);
				if(now==count-1){
					$(".nextImg").find("img").attr("src",nI);
					$(".nextImg").attr("href",nLink);
					$(".nextImg").find("h3").html(nIh3);
					$(".nextImg").find("h4").html(nIh4);
				}
			}
			//上一张图片按钮切换
			function prevImg(){
				var f = $("#play ul li").find("img").eq(now-1).attr("src");
				var fLink = $("#play ul li").find("a").eq(now-1).attr("href");
				var fH3 = $("#play ul li").find("h3").eq(now-1).html();
				var fH4 = $("#play ul li").find("h4").eq(now-1).html();
				$(".prevImg").find("img").attr("src",f);
				$(".prevImg").attr("href",fLink);
				$(".prevImg").find("h3").html(fH3);
				$(".prevImg").find("h4").html(fH4);
			}
			
			//下一张点击事件
			next.click(function(){
				clearInterval(timer);
				now++;
				if(now==count){
					now=0;
				}
				tab(now);
				nextImg();
				prevImg();
				timer=setInterval(autoRun, 200000);
			});
			//上一张点击事件
			prev.click(function(){
				clearInterval(timer);
				now--;
				if(now==-1){
					now=count-1;
				}
				tab(now);
				nextImg();
				prevImg();
				timer=setInterval(autoRun, 200000);
			});
			//自动轮播定义
			function autoRun(){
				now++;
				if(now==count){
					now=0;
				}
				tab(now);
				nextImg();
				prevImg();
			};

			var timer=setInterval(autoRun, 200000);
		});