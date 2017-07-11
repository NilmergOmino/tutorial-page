$(document).ready(function(){
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
        $('.aside__list-item-link').removeClass('aside__list-item_active');
        $(this).addClass('aside__list-item_active');
    })
})
