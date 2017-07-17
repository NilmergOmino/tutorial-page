$(document).ready(function(){
    var hideMenuFirst = function(){
        $('.nav').fadeOut(500);
        $('.hamburger-icon').attr('src', 'img/icons/menu-open.svg');
    }

    $('.nav__list-item-link').on('click', function(event){
        var windowWidth = $(window).width();
        if(windowWidth <= 710){
            hideMenuFirst();
        }
        var target = this.hash.slice(1),
            hash = this.hash,
            targetTop = $('#'+target).offset().top;
        $('html, body').animate({ scrollTop: targetTop }, 600, history.pushState(null,null,hash))
        event.preventDefault();
    })
})
