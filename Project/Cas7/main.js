function accordions() {
    const $accBtn = $('.js-acc-btn');
    const $accContent = $('.js-acc-content');
    const accItem = '.js-acc-item';
    const active = 'accordion-open';
    let isLoaded = false;

    $accBtn.on('click', function() {
        // $(accItem).removeClass(active);
        // $(this).closest(accItem).addClass(active);
        // $accContent.stop().slideUp();
        // $(this).next().stop().slideDown();

        if($(this).closest(accItem).hasClass(active)) {
            $(this).closest(accItem).removeClass(active);
            $(this).next().stop().slideUp();
        } else {
            $(this).closest(accItem).addClass(active);
            $(this).next().stop().slideDown();
        }
    });

    $(window).on('load', function() {
        if(!isLoaded) {
            $accBtn.first().click();
            isLoaded = true;
        }
    });

}

function tabs() {
    const $tabBtn = $('.js-tab-btn');
    const $tabContent = $('.js-tab-content');
    const activeBtn = 'tabs-btn-active';
    const activeContent = 'tabs-content-active';

    $tabBtn.each(function(i) {
        $(this).attr('data-index', i);
    });
    $tabContent.each(function(i) {
        $(this).attr('data-index', i);
    });

    // $(window).on('click', '.js-tab-btn', function()) dynamic
    $tabBtn.on('click', function() {
        // const index = $(this).index();
        // $tabBtn.removeClass(activeBtn);
        // $(this).addClass(activeBtn);
        // $tabContent.removeClass(activeContent);
        // $tabContent.eq(index).addClass(activeContent);
        const index = $(this).data('index');
        $tabBtn.removeClass(activeBtn);
        $(this).addClass(activeBtn);
        $tabContent.removeClass(activeContent);
        $('.js-tab-content[data-index="' + index + '"]').addClass(activeContent);
    });
}

function tabs2(button, content) {
    const $tabBtn = $(button);
    const $tabContent = $(content);
    const activeBtn = 'tabs-btn-active';
    const activeContent = 'tabs-content-active';

    $tabBtn.each(function(i) {
        $(this).attr('data-index', i);
    });
    $tabContent.each(function(i) {
        $(this).attr('data-index', i);
    });

    $tabBtn.on('click', function() {
        const index = $(this).data('index');
        $tabBtn.removeClass(activeBtn);
        $(this).addClass(activeBtn);
        $tabContent.removeClass(activeContent);
        $('.js-tab-content[data-index="' + index + '"]').addClass(activeContent);
    });
}

tabs2('.js-tab-btn', '.js-tab-content');
// tabs();
accordions();