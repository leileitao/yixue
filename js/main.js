
$(document).ready(function(){
	$("#register").click(function(){
		window.location.href = "register.html";
	});
	
	
	$(function(){
		
		$(".qixi > div").hover(function(){
			$(this).find('.pic2').stop().animate({top:-$(this).find(".pic2 > img").height()},200);							
		},function(){
			$(this).find('.pic2').stop().animate({top:'0'},200);	
		});
		
	});
	
	/**
	 * 推广页面start
	 */
	$(function(){
				
		$(".img-tab > div").hover(function(){
			$(this).find('.pic2').stop().animate({top:-$(this).find(".pic2 > img").height()},200);							
		},function(){
			$(this).find('.pic2').stop().animate({top:'0'},200);	
		});
		
	});
	
	$(function(){
		
		$(".more-img-tab > div").hover(function(){
			$(this).find('.pic2').stop().animate({top:-$(this).find(".pic2 > img").height()},1000);							
		},function(){
			$(this).find('.pic2').stop().animate({top:'0'},1000);	
		});
		
	});
	/**
	 * 推广页面end
	 */
});
