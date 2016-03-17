// <!-- 倒计时1 -->
     
		var intDiff1 = parseInt(240000);//倒计时总秒数量
		function timer1(intDiff1){
			window.setInterval(function(){
			var day1=0,
				hour1=0,
				minute1=0,
				second1=0;//时间默认值		
			if(intDiff1 > 0){
				day1 = Math.floor(intDiff1 / (60 * 60 * 24));
				hour1 = Math.floor(intDiff1 / (60 * 60)) - (day1 * 24);
				minute1 = Math.floor(intDiff1 / 60) - (day1 * 24 * 60) - (hour1 * 60);
				second1 = Math.floor(intDiff1) - (day1 * 24 * 60 * 60) - (hour1 * 60 * 60) - (minute1 * 60);
			}
			if (minute1 <= 9) minute1 = '0' + minute1;
			if (second1 <= 9) second1 = '0' + second1;
			$('#day_show1').html(day1);
			$('#hour_show1').html('<s id="h"></s>'+hour1);
			$('#minute_show1').html('<s></s>'+minute1);
			$('#second_show1').html('<s></s>'+second1);
			intDiff1--;
			}, 1000);
		} 
		$(function(){
			timer1(intDiff1);
		});	
		
// <!-- 倒计时2 -->
		
			var intDiff2 = parseInt(556600);//倒计时总秒数量
			function timer2(intDiff2){
				window.setInterval(function(){
				var day2=0,
					hour2=0,
					minute2=0,
					second2=0;//时间默认值		
				if(intDiff2 > 0){
					day2 = Math.floor(intDiff2 / (60 * 60 * 24));
					hour2 = Math.floor(intDiff2 / (60 * 60)) - (day2 * 24);
					minute2 = Math.floor(intDiff2 / 60) - (day2 * 24 * 60) - (hour2 * 60);
					second2 = Math.floor(intDiff2) - (day2 * 24 * 60 * 60) - (hour2 * 60 * 60) - (minute2 * 60);
				}
				if (minute2 <= 9) minute2 = '0' + minute2;
				if (second2 <= 9) second2 = '0' + second2;
				$('#day_show2').html(day2);
				$('#hour_show2').html('<s id="h"></s>'+hour2);
				$('#minute_show2').html('<s></s>'+minute2);
				$('#second_show2').html('<s></s>'+second2);
				intDiff2--;
				}, 1000);
			} 
			$(function(){
				timer2(intDiff2);
			});	
			
// <!-- 倒计时3 -->
		
			var intDiff3 = parseInt(44600);//倒计时总秒数量
			function timer3(intDiff3){
				window.setInterval(function(){
				var day3=0,
					hour3=0,
					minute3=0,
					second3=0;//时间默认值		
				if(intDiff3 > 0){
					day3 = Math.floor(intDiff3 / (60 * 60 * 24));
					hour3 = Math.floor(intDiff3 / (60 * 60)) - (day3 * 24);
					minute3 = Math.floor(intDiff3 / 60) - (day3 * 24 * 60) - (hour3 * 60);
					second3 = Math.floor(intDiff3) - (day3 * 24 * 60 * 60) - (hour3 * 60 * 60) - (minute3 * 60);
				}
				if (minute3 <= 9) minute3 = '0' + minute3;
				if (second3 <= 9) second3 = '0' + second3;
				$('#day_show3').html(day3);
				$('#hour_show3').html('<s id="h"></s>'+hour3);
				$('#minute_show3').html('<s></s>'+minute3);
				$('#second_show3').html('<s></s>'+second3);
				intDiff3--;
				}, 1000);
			} 
			$(function(){
				timer3(intDiff3);
			});	
			
// <!-- 倒计时4 -->
	
		var intDiff4 = parseInt(12000);//倒计时总秒数量
		function timer4(intDiff4){
			window.setInterval(function(){
			var day4=0,
				hour4=0,
				minute4=0,
				second4=0;//时间默认值		
			if(intDiff4 > 0){
				day4 = Math.floor(intDiff4 / (60 * 60 * 24));
				hour4 = Math.floor(intDiff4 / (60 * 60)) - (day4 * 24);
				minute4 = Math.floor(intDiff4 / 60) - (day4 * 24 * 60) - (hour4 * 60);
				second4 = Math.floor(intDiff4) - (day4 * 24 * 60 * 60) - (hour4 * 60 * 60) - (minute4 * 60);
			}
			if (minute4 <= 9) minute4 = '0' + minute4;
			if (second4 <= 9) second4 = '0' + second4;
			$('#day_show4').html(day4);
			$('#hour_show4').html('<s id="h"></s>'+hour4);
			$('#minute_show4').html('<s></s>'+minute4);
			$('#second_show4').html('<s></s>'+second4);
			intDiff4--;
			}, 1000);
		} 
		$(function(){
			timer4(intDiff4);
		});	
		
// <!-- 倒计5 -->
	
			var intDiff5 = parseInt(12000);//倒计时总秒数量
			function timer5(intDiff5){
				window.setInterval(function(){
				var day5=0,
					hour5=0,
					minute5=0,
					second5=0;//时间默认值		
				if(intDiff5 > 0){
					day5 = Math.floor(intDiff5 / (60 * 60 * 24));
					hour5 = Math.floor(intDiff5 / (60 * 60)) - (day5 * 24);
					minute5 = Math.floor(intDiff5 / 60) - (day5 * 24 * 60) - (hour5 * 60);
					second5 = Math.floor(intDiff5) - (day5 * 24 * 60 * 60) - (hour5 * 60 * 60) - (minute5 * 60);
				}
				if (minute5 <= 9) minute5 = '0' + minute5;
				if (second5 <= 9) second5 = '0' + second5;
				$('#day_show5').html(day5);
				$('#hour_show5').html('<s id="h"></s>'+hour5);
				$('#minute_show5').html('<s></s>'+minute5);
				$('#second_show5').html('<s></s>'+second5);
				intDiff5--;
				}, 1000);
			} 
			$(function(){
				timer5(intDiff5);
			});	
			
// <!-- 倒计6 -->
	
			var intDiff6 = parseInt(12000);//倒计时总秒数量
			function timer6(intDiff6){
				window.setInterval(function(){
				var day6=0,
					hour6=0,
					minute6=0,
					second6=0;//时间默认值		
				if(intDiff6 > 0){
					day6 = Math.floor(intDiff6 / (60 * 60 * 24));
					hour6 = Math.floor(intDiff6 / (60 * 60)) - (day6 * 24);
					minute6 = Math.floor(intDiff6 / 60) - (day6 * 24 * 60) - (hour6 * 60);
					second6 = Math.floor(intDiff6) - (day6 * 24 * 60 * 60) - (hour6 * 60 * 60) - (minute6 * 60);
				}
				if (minute6 <= 9) minute6 = '0' + minute6;
				if (second6 <= 9) second6 = '0' + second6;
				$('#day_show6').html(day6);
				$('#hour_show6').html('<s id="h"></s>'+hour6);
				$('#minute_show6').html('<s></s>'+minute6);
				$('#second_show6').html('<s></s>'+second6);
				intDiff6--;
				}, 1000);
			} 
			$(function(){
				timer6(intDiff6);
			});	
			
// <!-- 倒计7 -->
   
			var intDiff7 = parseInt(12000);//倒计时总秒数量
			function timer7(intDiff7){
				window.setInterval(function(){
				var day7=0,
					hour7=0,
					minute7=0,
					second7=0;//时间默认值		
				if(intDiff7 > 0){
					day7 = Math.floor(intDiff7 / (60 * 60 * 24));
					hour7 = Math.floor(intDiff7 / (60 * 60)) - (day7 * 24);
					minute7 = Math.floor(intDiff7 / 60) - (day7 * 24 * 60) - (hour7 * 60);
					second7 = Math.floor(intDiff7) - (day7 * 24 * 60 * 60) - (hour7 * 60 * 60) - (minute7 * 60);
				}
				if (minute7 <= 9) minute7 = '0' + minute7;
				if (second7 <= 9) second7 = '0' + second7;
				$('#day_show7').html(day7);
				$('#hour_show7').html('<s id="h"></s>'+hour7);
				$('#minute_show7').html('<s></s>'+minute7);
				$('#second_show7').html('<s></s>'+second7);
				intDiff7--;
				}, 1000);
			} 
			$(function(){
				timer7(intDiff7);
			});	
			
// <!-- 倒计8 -->
     
			var intDiff8 = parseInt(12000);//倒计时总秒数量
			function timer8(intDiff8){
				window.setInterval(function(){
				var day8=0,
					hour8=0,
					minute8=0,
					second8=0;//时间默认值		
				if(intDiff8 > 0){
					day8 = Math.floor(intDiff8 / (60 * 60 * 24));
					hour8 = Math.floor(intDiff8 / (60 * 60)) - (day8 * 24);
					minute8 = Math.floor(intDiff8 / 60) - (day8 * 24 * 60) - (hour8 * 60);
					second8 = Math.floor(intDiff8) - (day8 * 24 * 60 * 60) - (hour8 * 60 * 60) - (minute8 * 60);
				}
				if (minute8 <= 9) minute8 = '0' + minute8;
				if (second8 <= 9) second8 = '0' + second8;
				$('#day_show8').html(day8);
				$('#hour_show8').html('<s id="h"></s>'+hour8);
				$('#minute_show8').html('<s></s>'+minute8);
				$('#second_show8').html('<s></s>'+second8);
				intDiff8--;
				}, 1000);
			} 
			$(function(){
				timer8(intDiff8);
			});	
			
// <!-- 倒计9 -->
		
					var intDiff9 = parseInt(12000);//倒计时总秒数量
					function timer9(intDiff9){
						window.setInterval(function(){
						var day9=0,
							hour9=0,
							minute9=0,
							second9=0;//时间默认值		
						if(intDiff9 > 0){
							day9 = Math.floor(intDiff9 / (60 * 60 * 24));
							hour9 = Math.floor(intDiff9 / (60 * 60)) - (day9 * 24);
							minute9 = Math.floor(intDiff9 / 60) - (day9 * 24 * 60) - (hour9 * 60);
							second9 = Math.floor(intDiff9) - (day9 * 24 * 60 * 60) - (hour9 * 60 * 60) - (minute9 * 60);
						}
						if (minute9 <= 9) minute9 = '0' + minute9;
						if (second9 <= 9) second9 = '0' + second9;
						$('#day_show9').html(day9);
						$('#hour_show9').html('<s id="h"></s>'+hour9);
						$('#minute_show9').html('<s></s>'+minute9);
						$('#second_show9').html('<s></s>'+second9);
						intDiff9--;
						}, 1000);
					} 
					$(function(){
						timer9(intDiff9);
					});	
					
// <!-- 倒计10 -->
     
			var intDiff10 = parseInt(12000);//倒计时总秒数量
			function timer10(intDiff10){
				window.setInterval(function(){
				var day10=0,
					hour10=0,
					minute10=0,
					second10=0;//时间默认值		
				if(intDiff10 > 0){
					day10 = Math.floor(intDiff10 / (60 * 60 * 24));
					hour10 = Math.floor(intDiff10 / (60 * 60)) - (day10 * 24);
					minute10 = Math.floor(intDiff10 / 60) - (day10 * 24 * 60) - (hour10 * 60);
					second10 = Math.floor(intDiff10) - (day10 * 24 * 60 * 60) - (hour10 * 60 * 60) - (minute10 * 60);
				}
				if (minute10 <= 9) minute10 = '0' + minute10;
				if (second10 <= 9) second10 = '0' + second10;
				$('#day_show10').html(day10);
				$('#hour_show10').html('<s id="h"></s>'+hour10);
				$('#minute_show10').html('<s></s>'+minute10);
				$('#second_show10').html('<s></s>'+second10);
				intDiff10--;
				}, 1000);
			} 
			$(function(){
				timer10(intDiff10);
			});	
			
// <!-- 倒计11-->
      
			var intDiff11 = parseInt(12000);//倒计时总秒数量
			function timer11(intDiff11){
				window.setInterval(function(){
				var day11=0,
					hour11=0,
					minute11=0,
					second11=0;//时间默认值		
				if(intDiff11 > 0){
					day11 = Math.floor(intDiff11 / (60 * 60 * 24));
					hour11 = Math.floor(intDiff11 / (60 * 60)) - (day11 * 24);
					minute11 = Math.floor(intDiff11 / 60) - (day11 * 24 * 60) - (hour11 * 60);
					second11 = Math.floor(intDiff11) - (day11 * 24 * 60 * 60) - (hour11 * 60 * 60) - (minute11 * 60);
				}
				if (minute11 <= 9) minute11 = '0' + minute11;
				if (second11 <= 9) second11 = '0' + second11;
				$('#day_show11').html(day11);
				$('#hour_show11').html('<s id="h"></s>'+hour11);
				$('#minute_show11').html('<s></s>'+minute11);
				$('#second_show11').html('<s></s>'+second11);
				intDiff11--;
				}, 1000);
			} 
			$(function(){
				timer11(intDiff11);
			});	
			
// <!-- 倒计12-->
      
			var intDiff12 = parseInt(125500);//倒计时总秒数量
			function timer12(intDiff12){
				window.setInterval(function(){
				var day12=0,
					hour12=0,
					minute12=0,
					second12=0;//时间默认值		
				if(intDiff12 > 0){
					day12 = Math.floor(intDiff12 / (60 * 60 * 24));
					hour12 = Math.floor(intDiff12 / (60 * 60)) - (day12 * 24);
					minute12 = Math.floor(intDiff12 / 60) - (day12 * 24 * 60) - (hour12 * 60);
					second12 = Math.floor(intDiff12) - (day12 * 24 * 60 * 60) - (hour12 * 60 * 60) - (minute12 * 60);
				}
				if (minute12 <= 9) minute12 = '0' + minute12;
				if (second12 <= 9) second12 = '0' + second12;
				$('#day_show12').html(day12);
				$('#hour_show12').html('<s id="h"></s>'+hour12);
				$('#minute_show12').html('<s></s>'+minute12);
				$('#second_show12').html('<s></s>'+second12);
				intDiff12--;
				}, 1000);
			} 
			$(function(){
				timer12(intDiff12);
			});	
			
// <!-- 倒计13-->
     
			var intDiff13 = parseInt(15460);//倒计时总秒数量
			function timer13(intDiff13){
				window.setInterval(function(){
				var day13=0,
					hour13=0,
					minute13=0,
					second13=0;//时间默认值		
				if(intDiff13 > 0){
					day13 = Math.floor(intDiff13 / (60 * 60 * 24));
					hour13 = Math.floor(intDiff13 / (60 * 60)) - (day13 * 24);
					minute13 = Math.floor(intDiff13 / 60) - (day13 * 24 * 60) - (hour13 * 60);
					second13 = Math.floor(intDiff13) - (day13 * 24 * 60 * 60) - (hour13 * 60 * 60) - (minute13 * 60);
				}
				if (minute13 <= 9) minute13 = '0' + minute13;
				if (second13 <= 9) second13 = '0' + second13;
				$('#day_show13').html(day13);
				$('#hour_show13').html('<s id="h"></s>'+hour13);
				$('#minute_show13').html('<s></s>'+minute13);
				$('#second_show13').html('<s></s>'+second13);
				intDiff13--;
				}, 1000);
			} 
			$(function(){
				timer13(intDiff13);
			});	
			
// <!-- 倒计14-->
     
			var intDiff14 = parseInt(74600);//倒计时总秒数量
			function timer14(intDiff14){
				window.setInterval(function(){
				var day14=0,
					hour14=0,
					minute14=0,
					second14=0;//时间默认值		
				if(intDiff14 > 0){
					day14 = Math.floor(intDiff14 / (60 * 60 * 24));
					hour14 = Math.floor(intDiff14 / (60 * 60)) - (day14 * 24);
					minute14 = Math.floor(intDiff14 / 60) - (day14 * 24 * 60) - (hour14 * 60);
					second14 = Math.floor(intDiff14) - (day14 * 24 * 60 * 60) - (hour14 * 60 * 60) - (minute14 * 60);
				}
				if (minute14 <= 9) minute14 = '0' + minute14;
				if (second14 <= 9) second14 = '0' + second14;
				$('#day_show14').html(day14);
				$('#hour_show14').html('<s id="h"></s>'+hour14);
				$('#minute_show14').html('<s></s>'+minute14);
				$('#second_show14').html('<s></s>'+second14);
				intDiff14--;
				}, 1000);
			} 
			$(function(){
				timer14(intDiff14);
			});	
			
// <!-- 倒计15-->
     
			var intDiff15 = parseInt(12000);//倒计时总秒数量
			function timer15(intDiff15){
				window.setInterval(function(){
				var day15=0,
					hour15=0,
					minute15=0,
					second15=0;//时间默认值		
				if(intDiff15 > 0){
					day15 = Math.floor(intDiff15 / (60 * 60 * 24));
					hour15 = Math.floor(intDiff15 / (60 * 60)) - (day15 * 24);
					minute15 = Math.floor(intDiff15 / 60) - (day15 * 24 * 60) - (hour15 * 60);
					second15 = Math.floor(intDiff15) - (day15 * 24 * 60 * 60) - (hour15 * 60 * 60) - (minute15 * 60);
				}
				if (minute15 <= 9) minute15 = '0' + minute15;
				if (second15 <= 9) second15 = '0' + second15;
				$('#day_show15').html(day15);
				$('#hour_show15').html('<s id="h"></s>'+hour15);
				$('#minute_show15').html('<s></s>'+minute15);
				$('#second_show15').html('<s></s>'+second15);
				intDiff15--;
				}, 1000);
			} 
			$(function(){
				timer15(intDiff15);
			});	
			
// <!-- 倒计16-->
     
			var intDiff16 = parseInt(12000);//倒计时总秒数量
			function timer16(intDiff16){
				window.setInterval(function(){
				var day16=0,
					hour16=0,
					minute16=0,
					second16=0;//时间默认值		
				if(intDiff16 > 0){
					day16 = Math.floor(intDiff16 / (60 * 60 * 24));
					hour16 = Math.floor(intDiff16 / (60 * 60)) - (day16 * 24);
					minute16 = Math.floor(intDiff16 / 60) - (day16 * 24 * 60) - (hour16 * 60);
					second16 = Math.floor(intDiff16) - (day16 * 24 * 60 * 60) - (hour16 * 60 * 60) - (minute16 * 60);
				}
				if (minute16 <= 9) minute16 = '0' + minute16;
				if (second16 <= 9) second16 = '0' + second16;
				$('#day_show16').html(day16);
				$('#hour_show16').html('<s id="h"></s>'+hour16);
				$('#minute_show16').html('<s></s>'+minute16);
				$('#second_show16').html('<s></s>'+second16);
				intDiff16--;
				}, 1000);
			} 
			$(function(){
				timer16(intDiff16);
			});	
			