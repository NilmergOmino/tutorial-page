$(document).ready(function(){
    $('.main__sub-article').each(function(){
        var subArticle = $(this),
            subArticleTop = $(this).offset().top,
            subArticleHeight = $(this).height();

        $(window).on('scroll', function(){
            var windowTop = $(window).scrollTop();
            if(windowTop +30 > subArticleTop && windowTop < subArticleTop + subArticleHeight -30){
                var subArticleId = subArticle.attr('id');
                var relatedLink = $('a[href="#'+subArticleId+'"]');
                $('.aside__list-item-link').removeClass('aside__list-item_active').blur();
                relatedLink.addClass('aside__list-item_active');
            }
        })
    })
})
