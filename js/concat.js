document.addEventListener('DOMContentLoaded', function(){
//lista tagów wraz z popularnością danego tagu
    var tags = [['polityka', 253],
                ['humor', 23],
                ['technologia', 210],
                ['historia', 22],
                ['ciekawostki', 102],
                ['nauka', 88],
                ['ekonomia', 130],
                ['chemia', 110],
                ['sztuka', 10],
                ['muzyka', 243],
                ['teatr', 7],
                ['seriale', 21],
                ['alpaki', 233],
                ['film', 66]
               ];
//lista klas dla poszczególnych tagów od najbardziej popularnego do najmniej popularnego
    var classLevel = ['tag-first', 'tag-second', 'tag-third', 'tag-fourth', 'tag-fifth'];
    var shuffle = function(array){
        var i = 0,
            j = 0,
            temp = null,
            arrayLength = array.length;
        for (i = arrayLength - 1; i > 0; i -= 1) {
            j = Math.floor(Math.random() * (i + 1));
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    tags.sort(function(a, b){
        return a[1] - b[1];
    })
    classLevel.reverse();
    var classLevelLength = classLevel.length,
        tagsLength = tags.length,
        groups = tagsLength%classLevelLength,
        normalGroups = classLevelLength - groups,
        steps = [];
    if (groups > 0) {
        var groupAmount = (tagsLength+classLevelLength-groups)/classLevelLength,
            normalAmount = groupAmount-1,
            startStep = groupAmount;
        for (var i = 0; i < groups; i++) {
            steps.push(startStep);
            startStep += groupAmount;
        }
        var startStep = steps[steps.length -1]+normalAmount;
    }
    else{
        var normalAmount = tagsLength/classLevelLength,
            startStep = normalAmount;
    }
    for (var i = 0; i < normalGroups; i++) {
        steps.push(startStep);
        startStep += normalAmount;
    }
    var stepsLength = steps.length;
    for(var i=0; i<tagsLength; i++){
        for (var j = 0; j < stepsLength; j++) {
            if(i < steps[j] && tags[i][2] == undefined){
                tags[i][2] = classLevel[j];
            }
        }
    }
    tags = shuffle(tags);
    var container = document.getElementById('tags-container'),
        ul = document.createElement('ul');
    ul.className = 'tag-list';
    container.appendChild(ul);
    for (var i = 0; i < tagsLength; i++) {
        var ulElement = document.createElement('li');
        ul.appendChild(ulElement);
        var tagLink = document.createElement('a');
        tagLink.className = tags[i][2];
        tagLink.innerHTML = tags[i][0];
        tagLink.href = '#';
        ulElement.appendChild(tagLink);
    }

})

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

$(document).ready(function(){
    $('.main__article-heading').append('<span class="heading_underline">');
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

$(document).ready(function(){
    var endPoint = $(document).height() - $(window).height();
    var progressChange = function(){
        var windowTop = $(window).scrollTop();
        var progressPercValue = windowTop*100/endPoint;
        progressPercValue = progressPercValue.toFixed(2);
        $('#progress').css('width', 'calc('+progressPercValue+'% - 1px');
    }
    $(window).on('scroll', function(){
        progressChange();
    })
})

$(document).ready(function(){
    var hideMenuFirst = function(){
        $('.aside').fadeOut(500);
        $('.hamburger-icon').attr('src', 'img/icons/menu-open.svg');
    }

    $('.aside__list-item-link').on('click', function(event){
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

$(document).ready(function(){
    var asideTop = $('#aside').offset().top,
        mainTop = $('#main').offset().top,
        asideHeight = $('#aside').height(),
        mainHeight = $('#main').height(),
        asideTopMargin = 4;
    var stickyNav = function(){
        mainHeight = $('#main').height();
        asideHeight = $('#aside').height();
        var windowTop = $(window).scrollTop();
        if(windowTop + asideHeight + asideTopMargin >= mainTop + mainHeight){
            var isAsideOnBottom = true;
            $('#aside').removeClass("aside_sticky");
            $('#main').removeClass("main_position-fix");
            $('#aside').css('margin-top', mainHeight - asideHeight);
        }
        else var isAsideOnBottom = false;
        if(windowTop + asideTopMargin >= asideTop && !isAsideOnBottom){
            $('#aside').css('margin-top', 0);
            $('#aside').addClass("aside_sticky");
            $('#main').addClass("main_position-fix");
        }
        else if(!isAsideOnBottom){
            $('#aside').css('margin-top', 0);
            $('#aside').removeClass("aside_sticky");
            $('#main').removeClass("main_position-fix");
        }
    }
    stickyNav();
    $(window).on('scroll', function(){
        var windowWidth = $(window).width();
        if(windowWidth > 710) stickyNav();
    })
})

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
