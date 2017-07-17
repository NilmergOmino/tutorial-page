$(document).ready(function(){
    var navTop = $('#nav').offset().top,
        mainTop = $('#main').offset().top,
        navHeight = $('#nav').height(),
        mainHeight = $('#main').height(),
        navTopMargin = 4;
    var stickyNav = function(){
        mainHeight = $('#main').height();
        navHeight = $('#nav').height();
        var windowTop = $(window).scrollTop();
        if(windowTop + navHeight + navTopMargin >= mainTop + mainHeight){
            var isnavOnBottom = true;
            $('#nav').removeClass("nav_sticky");
            $('#main').removeClass("main_position-fix");
            $('#nav').css('margin-top', mainHeight - navHeight);
        }
        else var isnavOnBottom = false;
        if(windowTop + navTopMargin >= navTop && !isnavOnBottom){
            $('#nav').css('margin-top', 0);
            $('#nav').addClass("nav_sticky");
            $('#main').addClass("main_position-fix");
        }
        else if(!isnavOnBottom){
            $('#nav').css('margin-top', 0);
            $('#nav').removeClass("nav_sticky");
            $('#main').removeClass("main_position-fix");
        }
    }
    stickyNav();
    $(window).on('scroll', function(){
        var windowWidth = $(window).width();
        if(windowWidth > 710) stickyNav();
    })
})
