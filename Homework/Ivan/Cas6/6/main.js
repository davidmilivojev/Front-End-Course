function stickyHeader() {
    const $header = $('.js-header');
    const sticky = 'header--sticky';

    $(window).on('scroll', function() {
        const scrollTop = $(this).scrollTop();

        if(scrollTop > 0) {
            $header.addClass(sticky);
        } else {
            $header.removeClass(sticky);
        }
        $('.js-toggle').removeClass('toggle--open');
        $('.js-nav').stop().slideUp();
    });
}

function navigation() {
    const $toggle = $('.js-toggle');
    const $nav = $('.js-nav');
    const $link = $('.js-link')
    const open = 'toggle--open';

    $toggle.on('click', function() {
        $(this).toggleClass(open);
        $nav.stop().slideToggle();
    });

    $link.on('click', function() {
        $(this).closest('.js-nav').stop().slideUp();
        $toggle.removeClass(open);
    });
}

function customCursor() {
    const $cursor = $('.js-cursor');
    const $box = $('.js-box');

    $box.on('mousemove', function(e) {
        const xAxis = e.pageX - 20;
        const yAxis = e.pageY - 95;
        $cursor.css ({
            'top': yAxis,
            'left': xAxis
        });
    });
}

function changeBackgroundColor() {
    const $header = $('.js-header');
    const headerHeight = $header.height();
    const $box = $('.js-box');
    const boxHeight = $box.height();
    const grey = 'box--grey';
    
    $box.on('mousemove', function(e) {
        const yAxis = e.pageY - headerHeight;

        if(yAxis > boxHeight/2) {
            $box.addClass(grey);
        } else {
            $box.removeClass(grey);
        }
    });
}

stickyHeader();
navigation();
customCursor();
changeBackgroundColor();