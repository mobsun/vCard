(function(Font) {
	var e = window,
		a = 'inner',
		FontSize = Font;
	if (!('innerWidth' in window)) {
		a = 'client';
		e = document.documentElement || document.body;
	}
	//console.log(e[a + 'Width'])
	var winSize = {
		width: e[a + 'Width'],
		height: e[a + 'Height']
	};

	FontSize = (FontSize * winSize.width) / 640;
	FontSize = document.getElementsByTagName("html")[0].style.fontSize = FontSize + "px";
})(100)