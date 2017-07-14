$(document).ready(function(){
    //toggle elementów nawigacji
    $('.aside__list-item-button').on('click', function(event){
        $(this).next().toggle(250);
        if($(this).attr('aria-expanded') == 'false'){
            $(this).attr('aria-expanded', 'true');
        }
        else{
            $(this).attr('aria-expanded', 'false');
        }
    })
    $('.aside__list-item-link').on('click', function(){
        $('.aside__list-item-link').removeClass('aside__list-item_active-strong');
        $(this).addClass('aside__list-item_active-strong');
    })
    //toggle nawigacji na małych rozdzielczościach (hamburger menu)
    $('.hamburger-menu-button').on('click', function(){
        var asideDisplayStatus = $('.aside').css('display');
        if(asideDisplayStatus == 'none'){
            $('.aside').toggle(250);
            $('.hamburger-icon').attr('src', 'img/icons/menu-hide.svg');
        }
        else{
            $('.aside').toggle(250);
            $('.hamburger-icon').attr('src', 'img/icons/menu-open.svg');
        }
    })
    $(window).resize(function(){
        var windowWidth = $(window).width();
        if(windowWidth > 710){
            $('.aside').css('display', 'block');
        }
        else{
            $('.aside').css('display', 'none');
        }
    })
})
