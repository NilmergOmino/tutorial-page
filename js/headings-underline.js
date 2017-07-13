$(document).ready(function(){
    $('.main__article-heading').append('<span class="heading_underline">');
    $('.heading_underline').each(function(){
        var textLength = $(this).parent().text().length;
        $(this).css(
            {
                'width': 0.7*textLength+"%",
                'animation-name': 'underlineHeading',
                'animation-duration': '0.7s'
            });
    })
})
