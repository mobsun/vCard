/*原生获取可视窗口的宽高*/
define(function() {
	var e = window,
		a = 'inner';
	if (!('innerWidth' in window)) {
		a = 'client';
		e = document.documentElement || document.body;
	}
	//console.log(e[a + 'Width'])
	return {
		width: e[a + 'Width'],
		height: e[a + 'Height']
	};

});