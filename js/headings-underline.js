$(document).ready(function(){
    $('.article__heading').append('<span class="heading_underline">');
    $('.heading_underline').each(function(){
        var currentHeading = $(this);
        var textLength = currentHeading.parent().text().length;
        var showUnderlineAnimation = function(){
            var startAnimationPoint = $(document).scrollTop() + (0.9* $(window).height());
            if(startAnimationPoint >= currentHeading.offset().top){
                currentHeading.css(
                    {
                        'width': 0.7*textLength+"%",
                        'animation-name': 'underlineHeading',
                        'animation-duration': '1.5s',
                        'opacity': 1
                    });
            }
        }
        showUnderlineAnimation();
        $(document).on('scroll', showUnderlineAnimation);
    })
})
