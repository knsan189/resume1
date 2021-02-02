$(function () {
    $(".lines").addTemporaryClass("ready", 1000);
});

$(function(){
    $('.depth1>li').on('click', function(){
        $(this)
        .addClass('active')
        .siblings().removeClass('active')
    })
});

$(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        //console.log(scroll);
        if (scroll >= 20) {
            //console.log('a');
            $("#header").addClass("fixed");
        } else {
            //console.log('a');
            $("#header").removeClass("fixed");
        }
    });
});

$(function () {
    $('.menu_btn').click(function () {
        $('#nav').addClass('menu_on');
    })
    $('.menu_close').click(function () {
        $('#nav').removeClass('menu_on');
    });
    $('.depth1>li').click(function () {
        $('#nav').removeClass('menu_on');
    });
});


(function ($) {
    $.fn.extend({

        addTemporaryClass: function (className, duration) {
            var elements = this;
            setTimeout(function () {
                elements.removeClass(className);
            }, duration);

            return this.each(function () {
                $(this).addClass(className);
            });
        }
    });

})(jQuery);