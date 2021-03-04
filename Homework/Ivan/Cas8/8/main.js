function dropdown() {
    const $btn = $('.js-drop-btn');
    const $liBtn = $('.js-li-btn');
    const active = 'dropdown-btn-active';

    $btn.on('click', function() {
        $(this).next().stop().slideToggle();
        $(this).toggleClass(active);
    });

    $liBtn.on('click', function() {
        const currentEl = $(this).html();
        $btn.html(currentEl).removeClass(active);
        $(this).closest('.js-drop-list').stop().slideUp();
    });

    $(document).on('click', function(e) {
        if(!$(e.target).closest('.dropdown').length) {
            $btn.removeClass(active);
            $('.js-drop-list').stop().slideUp();
        }
    });
}

dropdown();