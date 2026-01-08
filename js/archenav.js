$("#header_r1").hover(function(){
    $("#header_r11").addClass('header_r00');
},function(){
    $("#header_r11").removeClass('header_r00');
})
$("#header_r2").hover(function(){
    $("#header_r21").addClass('header_r00');
},function(){
    $("#header_r21").removeClass('header_r00');
})
$("#header_r3").hover(function(){
    $("#header_r31").addClass('header_r00');
},function(){
    $("#header_r31").removeClass('header_r00');
})
$("#header_r4").hover(function(){
    $("#header_r41").addClass('header_r00');
},function(){
    $("#header_r41").removeClass('header_r00');
})
$("#header_r5").hover(function(){
    $("#header_r51").addClass('header_r00');
},function(){
    $("#header_r51").removeClass('header_r00');
})
$("#header_r6").hover(function(){
    $("#header_r61").addClass('header_r00');
},function(){
    $("#header_r61").removeClass('header_r00');
})


function nTabs(thisObj,Num){
if(thisObj.className == "active")return;
var tabObj = thisObj.parentNode.id;
var tabList = document.getElementById(tabObj).getElementsByTagName("li");
for(i=0; i <tabList.length; i++)
{
  if (i == Num)
  {
   thisObj.className = "active"; 
      document.getElementById(tabObj+"_Content"+i).style.display = "block";
  }else{
   tabList[i].className = "normal"; 
   document.getElementById(tabObj+"_Content"+i).style.display = "none";
  }
} 
}