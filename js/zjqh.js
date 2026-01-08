window.onload=function()
	{
		var oTTSlider=document.getElementById('TTSlider');
		var oTTSliderTitle=getByClass('TTSliderTitle',oTTSlider,'div')[0];
		var aSubNav=oTTSliderTitle.getElementsByTagName('li');
		var oTTSliderPrevBtn=document.getElementById('TTSliderPrevBtn');
		var oTTSliderNextBtn=document.getElementById('TTSliderNextBtn');
		var oTTSliderPicList=getByClass('TTSliderPicList',oTTSlider,'div')[0];
		var aItem=oTTSliderPicList.getElementsByTagName('ul');
		var len=aItem.length;
		var showIndex=aItemImgWidth=iNow=0;
		var aEle=[];
		for(var i=0;i<len;i++)
		{  
			var aItemImgs=aItem[i].getElementsByTagName('li');
			if(!aItemImgWidth)
			{
				aItemImgWidth=aItemImgs[0].offsetWidth;
			}
			aEle.push(aItemImgs);	//存入数组,考虑到有多个轮播,且每个轮播里面的图片个数可能一致.
			aSubNav[i].index=i;
			aSubNav[i].onmouseover=function()//切换
			{
				var index=showIndex=this.index;  
				for(var j=0;j<len;j++)
				{
					if(j!=index)
					{
							aItem[j].className='';
							aSubNav[j].className='';
					}
				}
				aSubNav[index-1] && (aSubNav[index-1].className='noneBorRight' );
				if(index>0)
				{
					(aSubNav[0].getElementsByTagName('div')[0].style.borderLeft='0px solid #C3C5C7');
				}
				else
				{
					aSubNav[0].getElementsByTagName('div')[0].style.borderLeft='0px solid #C3C5C7';
				}
				
				aSubNav[index].className='cur';
				aItem[index].className='show';
			}
		}


		for(var i=0;i<len;i++)
		{
			var num=aEle[i].length;
			if(aItem[i].className=='show')
			{
				showIndex=i;
			}
			aItem[i].style.width=num*(aItemImgWidth)+'px'
		}
		oTTSliderNextBtn.onclick=function()
		{
			var maxNum=aEle[showIndex].length-1;
			aItem[showIndex].insertBefore(aEle[showIndex][maxNum],aEle[showIndex][0]);
			aItem[showIndex].style.left=-aItemImgWidth+'px';
			doMove(aItem[showIndex],0);
		}

		oTTSliderPrevBtn.onclick=function()
		{
			doMove(aItem[showIndex],-(aItemImgWidth),function(){
				aItem[showIndex].style.left=0;
				aItem[showIndex].appendChild(aEle[showIndex][0])
			});
		}

		function doMove(o,t,fn)
		{
			clearInterval(o.timer);
			o.timer=setInterval(function(){
				var is= (t-getStyle(o,'left'))/8;
				is= is>0?Math.ceil(is):Math.floor(is);
				if(t==o.offsetLeft)
				{
					clearInterval(o.timer);
					(typeof fn==='function') && fn();
				}
				else
				{
					o.style.left=o.offsetLeft+is+'px';
				}

			},30)
		}
		function getStyle(o,a)
		{
			return o.currentStyle ? parseFloat(o.currentStyle[a]) : parseFloat(getComputedStyle(o,false)[a]);
		}
		function getByClass(s,p,e)
		{
			var reg=new RegExp('(\\b)'+s+'(\\b)');
			var aElement=(p||document).getElementsByTagName(e||'*');
			var aResult=[];
			for(var i=0;i<aElement.length;i++)
			{
				reg.test(aElement[i].className) && aResult.push(aElement[i]);
			}
			return aResult;
		}
	}