$(function(){
			var oDiv = $("#play");  //�ⲿ����
			var count = $("#play ul li").length;  //�ڲ�ͼƬ����
			var countwidth = $("#play ul li").width();  //ͼƬ�߿���
			var oUl = $("#play ul").css("width",count*countwidth);  //ul li�ܿ��
			var now = 0;
			var next = $("#next");
			var prev = $("#prev");
			//�����ť����
			//���ҵ��ͼƬ��ȡ
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
			//��ť����¼�
			//ͼƬѭ���¼�
			function tab(index){
				now = index;
				oUl.stop(true,false).animate({"left":-353 * now},400);
			}
			//��һ�Ű�ťͼƬ�л�
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
			//��һ��ͼƬ��ť�л�
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
			
			//��һ�ŵ���¼�
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
			//��һ�ŵ���¼�
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
			//�Զ��ֲ�����
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