$(document).ready(function(){
    //toggle elementów nawigacji
    $('.nav__list-item-button').on('click', function(event){
        $(this).next().toggle(250);
        if($(this).attr('aria-expanded') == 'false'){
            $(this).attr('aria-expanded', 'true');
        }
        else{
            $(this).attr('aria-expanded', 'false');
        }
    })
    $('.nav__list-item-link').on('click', function(){
        $('.nav__list-item-link').removeClass('nav__list-item_active-strong');
        $(this).addClass('nav__list-item_active-strong');
    })
    //toggle nawigacji na małych rozdzielczościach (hamburger menu)
    $('.hamburger-menu-button').on('click', function(){
        var navDisplayStatus = $('.nav').css('display');
        if(navDisplayStatus == 'none'){
            $('.nav').toggle(250);
            $('.hamburger-icon').attr('src', 'img/icons/menu-hide.svg');
        }
        else{
            $('.nav').toggle(250);
            $('.hamburger-icon').attr('src', 'img/icons/menu-open.svg');
        }
    })
    $(window).resize(function(){
        var windowWidth = $(window).width();
        if(windowWidth > 710){
            $('.nav').css('display', 'block');
        }
        else{
            $('.nav').css('display', 'none');
        }
    })
})
