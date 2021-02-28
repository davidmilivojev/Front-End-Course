function tabs() {
    const $accButton = $('.js-acc-btn');
    const $accContent = $('.js-acc-content');
    const accItem = '.js-acc-item';
    const active = 'accordion-open';
    const windowWidth = 768;
    let isLoaded = false;

    $accButton.on('click', function() {
        $(accItem).removeClass(active);
        $(this).closest(accItem).addClass(active);

        if ($(window).width() < windowWidth) {
            $accContent.stop().slideUp();
            $(this).next().stop().slideDown();
        } else {
            $accContent.hide();
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