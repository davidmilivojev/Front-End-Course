function dropdown() {
    const $btn = $('.js-drop-btn');
    const $liBtn = $('.js-li-btn');
    const active = 'dropdown-btn-active';

    $btn.on('click', function() {
        $(this).toggleClass(active);
        $(this).next().stop().slideToggle();
    });

    $liBtn.on('click', function() {
        const icon = $(this).html();
        $btn.html(icon).removeClass(active);
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