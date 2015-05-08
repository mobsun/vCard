require.config({
	//By default load any module IDs from js/lib
	//baseUrl: 'js/lib',
	//except, if the module ID starts with "app",
	//load it from the js/app directory. paths
	//config is relative to the baseUrl, and
	//never includes a ".js" extension since
	//the paths config could be for a directory.
	baseUrl:"js",
	enforceDefine:false,
	paths: {
		'windowSize':'app/windowSize',
		'initDom':'app/initDom',
		'jquery':['http://ajax.aspnetcdn.com/ajax/jQuery/jquery-2.1.3.min','lib/jquery.min'],
		'jgestures':'lib/jgestures.min',
		'imgpreload':'lib/jquery.imgpreload',
		'swiper':'lib/swiper.min',
		'TweenLite':['http://cdnjs.cloudflare.com/ajax/libs/gsap/1.16.1/TweenLite.min','lib/gsap/TweenLite.min'],
		'CSSPlugin':['http://cdnjs.cloudflare.com/ajax/libs/gsap/1.16.1/plugins/CSSPlugin.min','lib/gsap/CSSPlugin.min'],
		'EaselPlugin':['http://cdnjs.cloudflare.com/ajax/libs/gsap/1.16.1/easing/EasePack.min','lib/gsap/EaselPlugin.min'],
		'TimelineLite':['http://cdnjs.cloudflare.com/ajax/libs/gsap/1.16.1/TimelineLite.min','lib/gsap/TimelineLite.min'],
		//'TweenLite':['lib/gsap/TweenLite.min'],
		//'CSSPlugin':['lib/gsap/CSSPlugin.min'],
		//'EaselPlugin':['lib/gsap/EaselPlugin.min'],
		//'TimelineLite':['lib/gsap/TimelineLite.min'],
		'animate':'app/animate',
		'control':'app/control'
	},
	shim:{
		'imgpreload':['jquery'],
		'jgestures':['jquery']
	},
	urlArgs: "bust=" +  (new Date()).getTime(),
	waitSeconds: 30
});
require(['control'], function() {});