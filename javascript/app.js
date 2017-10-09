window.mobileAndTabletcheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}

$(window).on('resize', function () {
    if(!mobileAndTabletcheck()) {
        var iHe = $('.first .side-a img').height();
        var iWi = $('.first .side-a img').width();

        var bHe = $('.animate').height();
        var bWi = $('.animate').width();

        var fHe = parseInt((bHe-iHe)/2);
        var fWi = parseInt((bWi-iWi)/2);

        var tTo = parseInt((bHe-$('.home .post .title').height())/2);


        $('.first .side-a img').css({
            top: fHe,
            left: fWi
        });
        $('.first .side-b img').css({
            top: fHe+25,
            left: fWi+25
        });
        $('.first .title').css('top', tTo);
    }
});
$(window).on('load', function () {
    Pace.on('done',function(){
        $('.article-cover, .container').css('visibility', 'visible');
    });
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

    $('.title-wrapper').on('click', function(){
        window.location = '/';
    });


    if(!mobileAndTabletcheck()) {
        $('body').css({
            'min-width': '880px',
             'overflow' : 'visible'
        });

        $('.home .margin').css('height', $(window).height());


        $('.home .side-b').hover(function(){
            var $this = $(this),
                $title = $this.parent().find('.title');
            $this.addClass('hover');
            $('body').addClass('back-side');
            if($this.parent().hasClass('first')) {
               $('body').addClass('first-post');
            }
            $('#projects').text('PERSONAL PROJECTS');
            $title.text($title.data('b_title'));
            $title.attr('href', $title.data('b_link'));
            $title.addClass('title_b');
        });

        $('.post, .home .side-a').hover(function(){
            var $this =  $('.home .hover'),
                $title = $this.parent().find('.title');
            $this.removeClass('hover');
            $('body').removeClass('back-side');
            if($this.parent().hasClass('first')) {
               $('body').removeClass('first-post');
            }
            $('#projects').text('BRAND PROJECTS');
            $title.text($title.data('a_title'));
            $title.attr('href', $title.data('a_link'));
        });


        var iHe = $('.first .side-a img').height();
        var iWi = $('.first .side-a img').width();

        var bHe = $('.animate').height();
        var bWi = $('.animate').width();

        var fHe = parseInt((bHe-iHe)/2);
        var fWi = parseInt((bWi-iWi)/2);

        var tTo = parseInt((bHe-$('.home .post .title').height())/2);


        $('.first .side-a img').css({
            top: fHe,
            left: fWi
        });
        $('.first .side-b img').css({
            top: fHe+25,
            left: fWi+25
        });


         $('.first .title').css('top', tTo);



        var controller = new ScrollMagic();
        var scene = [];

        $('.animate').each(function () {
            var $this = $(this),
                identifier = $this.data('identifier'),
                margin = 100;
            $this.find('.side-a img').css({
                top: margin,
                left: margin
            });
            $this.find('.side-b img').css({
                top: (bHe-iHe) - margin,
                left: (bWi-iWi) - margin
            });
            margin = $this.find('.title').height();

            $this.find('.title').css('top', margin);

            scene[identifier] = new ScrollScene({triggerElement: "#trigger_" + identifier, duration: bHe, offset: parseInt(bHe/2)})
                .setTween([
                    TweenMax.to("#post_" + identifier + " .side-a img", 100, {top: fHe, left:fWi, ease: Linear.easeIn}),
                    TweenMax.to("#post_" + identifier + " .side-b img", 100, {top: fHe+25, left:fWi+25, ease: Linear.easeIn}),
                    TweenMax.to("#post_" + identifier + " .title", 100, {top: tTo, ease: Linear.easeIn})])
                .setPin("#post_" + identifier,  {pushFollowers: false})
                .addTo(controller)
                .enabled(true);
        });
    } else {
        $('body').addClass('mobile');

        $('.menu-wrapper, .about').remove();
        $('.header').css({
            'position' : 'relative',
            'padding-bottom' : '40px'
        });
        $('.footer').css({
            'position' : 'relative',
            'bottom' : '-25px'
        });



        $('.animate, .first').each(function(){
            var aTitle = $(this).find('a.title').data('a_title');
            var bTitle = $(this).find('a.title').data('b_title');
            $(this).find('a.title').remove();

            $(this).find('a.side-a').append('<span>' + aTitle + '</span>');
            $(this).find('a.side-b').append('<span>' + bTitle + '</spam>');
            $(this).find('a.side-b, a.side-a').css({
                'width' : '100%'
            });

            $(this).find('img').css({
                'width' : '90%',
                'margin-left' : '5%'
            });

            $(this).find('img').css({
                'width' : '90%',
                'margin-left' : '5%'
            });


            $('#post_work3 .title').css('paddingTop', 70/2)

            $(this).find('a.side-a').css({
                'height' : $(this).find('a.side-a img').height()
            });

            $(this).find('a.side-b').css({
                'top' : $(this).find('a.side-a img').height(),
                'height' : $(this).find('a.side-b img').height(),
                'margin-top' : '20px'
            });
        });
    }

    $('._show-menu').on('touchstart',function(){
        $(this).addClass('activate');
    }).on('touchend',function(){
        $(this).removeClass('activate');
    });
});