define(['animate', 'swiper', 'jgestures', 'imgpreload'], function (animate, Swiper, jQuery, imgpreload) {
    $(function () {
        $("body img").imgpreload({
            each: function () {
                // callback invoked when each image is loaded
                // this = dom image object
                // check for success with: $(this).data('loaded')
            },
            all: showScene()
        });
    });
    /*显示主场景*/
    function showScene() {
        $(".wrap_loading").hide();
        $(".wrap_scene").show();
        sliderInit();
    }
    /*swiper启动*/
    function sliderInit() {
        var mySwiper = new Swiper('.swiper-container', {
            direction: 'vertical', //方向；vertical：垂直；horizontal：水平
            loop: false, //是否循环
            // 如果需要前进后退按钮
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev'

        })
    }
});