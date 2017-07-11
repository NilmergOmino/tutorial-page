$(document).ready(function(){
    $('.aside__list-item-link').on('click', function(event){
        var target = this.hash.slice(1),
            hash = this.hash,
            targetTop = $('#'+target).offset().top;
        $('html, body').animate({ scrollTop: targetTop }, 600,
            history.pushState(null,null,hash)
        )
        event.preventDefault();
    })
})
