$(document).ready(function(){
    var asideTop = $('#aside').offset().top,
        mainTop = $('#main').offset().top,
        asideHeight = $('#aside').height(),
        mainHeight = $('#main').height(),
        asideTopMargin = 4;
    var stickyNav = function(){
        asideHeight = $('#aside').height();
        var windowTop = $(window).scrollTop();
        if(windowTop + asideHeight + asideTopMargin >= mainTop + mainHeight){
            var isAsideOnBottom = true;
            $('#aside').removeClass("aside_sticky");
            $('#main').removeClass("main_position-fix");
            $('#aside').css('margin-top', mainHeight - asideHeight);
        }
        else var isAsideOnBottom = false;
        if(windowTop + asideTopMargin >= asideTop && !isAsideOnBottom){
            $('#aside').css('margin-top', 0);
            $('#aside').addClass("aside_sticky");
            $('#main').addClass("main_position-fix");
        }
        else if(!isAsideOnBottom){
            $('#aside').css('margin-top', 0);
            $('#aside').removeClass("aside_sticky");
            $('#main').removeClass("main_position-fix");
        }
    }
    stickyNav();
    $(window).on('scroll', function(){
        stickyNav();
    })
})
