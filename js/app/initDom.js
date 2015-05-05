/*设置文档初始字号*/
define(['windowSize'], function(windowSize) {
	
	var domSize={};
	domSize.setFont=function(obj) {
		//obj={defaultSize:100,onComplete:function(){}}
		defaultSize=obj.defaultSize;
		var FontSize = defaultSize;
		FontSize = (FontSize * windowSize.width) / 640;
		FontSize=document.getElementsByTagName("html")[0].style.fontSize = FontSize + "px";
		obj.onComplete();
		return FontSize;
		
	}
	domSize.width=windowSize.width;
	domSize.height=windowSize.height;
	return domSize;
});