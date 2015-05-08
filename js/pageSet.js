(function (Font) {
    var e = window,
        a = 'inner',
        FontSize = Font;
    if (!('innerWidth' in window)) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    var winSize = {
        width: e[a + 'Width'],
        height: e[a + 'Height']
    };
    FontSize = (FontSize * winSize.width) / 640; //取得计算后的html font-size
    FontSize = document.getElementsByTagName("html")[0].style.fontSize = FontSize + "px"; //重新为html设置字号
})(100)