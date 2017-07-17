$(document).ready(function(){
    $('.article__section').each(function(){
        var subArticle = $(this),
            subArticleTop = $(this).offset().top,
            subArticleHeight = $(this).height();

        $(window).on('scroll', function(){
            var windowTop = $(window).scrollTop();
            if(windowTop +30 > subArticleTop && windowTop < subArticleTop + subArticleHeight -30){
                var subArticleId = subArticle.attr('id');
                var relatedLink = $('a[href="#'+subArticleId+'"]');
                $('.nav__list-item-link').removeClass('nav__list-item_active').blur();
                relatedLink.addClass('nav__list-item_active');
            }
        })
    })
})
