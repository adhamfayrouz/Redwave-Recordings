$(document).ready(function(){

    var winh = $(window).height();
    $('#mycover').height(winh);
    $(window).on('resize',function(){
        $('#mycover').height($(this).height());
    });

    $(window).scroll(function(){
        var ht = $('.cover-head').offset().top;
        var hh = $('.cover-head').outerHeight();
        var wh = $(window).height();
        var ws = $(window).scrollTop();
        var brand = $()
        if(ws >= ht){

            $('.cover-head .brand').hide();
            $('.main-nav .brand').show();
            $('.main-nav .nav-overlay').css('height','100%');
        }else{
            $('.main-nav .nav-overlay').css('height','0');
            $('.main-nav .brand').hide();
            $('.cover-head .brand').show();
        }
    });

    $('.scroller').click(function(){

        var target = $(this).data('target');
        var targetH = $('' + target);
        $('html, body').stop().animate({
            'scrollTop': targetH.offset().top
        }, 700, 'swing', function () {
            window.location.hash = targetH;
        });
        
    });

    for(var i =0;i<47;i++){
        $('.beats').append('<div class="bar"></div>');
    }

    $('.music-player-toggler').click(function(){

        var musicBox = $(this).parent();
        if(musicBox.css('bottom') != '30px'){
            musicBox.css('bottom','30px');
            $(this).hide();
        }
    });

    $('body').click(function(e) 
    {
        var target = $(".music-box");
        if (!target.is(e.target) && target.has(e.target).length === 0) 
        {
            if(target.css('bottom') == '30px'){
                target.css('bottom','-350px').children('.music-player-toggler').show();
            }
        }
    });

    $('.music-player iframe').on('load',function(){

        $('.load-overlay .spinner').fadeOut(700,
            function () {
        
                $(this).parent().fadeOut(700,
                function () {
        
                    $(this).remove();
                    
                });
        
            });
    });


});