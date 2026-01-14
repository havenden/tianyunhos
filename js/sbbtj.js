$(function(){
	var bn=0;
	var bl=$('.banner ul li').length;
	var ww=$(window).width();
	if(ww>1920)ww=1920;
	var bw=ww;
	var bh=ww*0.3;
	$('.slider__items ul li').css({'width':bw+'px','height':'580px'});
	$('.banner').css({'width':bw+'px','height':'580px'});
	$('#slides').slides({
		container: 'slides_container',
		preload: true,
		play: 3000,
		pause: 800,
		hoverPause: true,
		effect: 'slide',
		slideSpeed:850
	});
});
/*生宝宝统计*/
var shuju = 2000; //在这里设置刷新时间，单位是毫秒，比如1秒钟就是1000
var min = 20209; //生成的最小的数字，比如200
var max = 20210; //生成的最大的数字，比如500
var ctl_id = "sbbtj"; //要在哪个控件中显示，比如例子中的"show"
		
function Refresh() {
	document.getElementById(ctl_id).innerHTML = parseInt(Math.random() * (max - min + 1) + min);
	}
	onload = function() {
		Refresh();
		setInterval("Refresh();", shuju);
		}