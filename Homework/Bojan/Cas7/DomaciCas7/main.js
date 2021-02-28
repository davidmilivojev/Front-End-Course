function tabs() {
    const $accButton = $('.js-acc-btn');
    const $accContent = $('.js-acc-content');
    const accItem = '.js-acc-item';
    const active = 'accordion-open';
    let isLoaded = false;

    $accButton.on('click', function() {

        if($(this).closest(accItem).hasClass(active)) {
            $(this).closest(accItem).removeClass(active);
            $(this).next().stop().slideUp();
        } else {
            $(this).closest(accItem).addClass(active);
            $(this).next().stop().slideDown();
        }

        if (window.matchMedia("(min-width: 767px)").matches) {
            $accContent.stop().hide();
            $(this).next().show();
        }
    });

    $(window).on('load', function() {
        if(!isLoaded) {
            $accButton.first().click();
            isLoaded = true;
        }
    })
}

tabs();