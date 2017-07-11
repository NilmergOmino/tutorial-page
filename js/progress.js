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
