let screenSize = window.matchMedia("(max-width: 425px)");
const $tabBtn = $('.js-tab-btn');
const $tabsContainer = $('.js-tabs-container');
const $tabContent = $('.js-tab-content');
const activeBtn = 'tabs-btn-active';
const activeContent = 'tabs-content-active';

function tabs() {
    $tabBtn.each(function(i) {
        $(this).attr('data-index', i);
    });
    $tabContent.each(function(i) {
        $(this).attr('data-index', i);
    });

    $tabBtn.on('click', function() {
        const index = $(this).data('index');
        if (screenSize.matches) {
            const currentContent = $('.js-tab-content[data-index="' + index + '"]');
            if($(this).hasClass(activeBtn)) {
                $(this).removeClass(activeBtn);
                currentContent.removeClass(activeContent);
            } else {
                $(this).addClass(activeBtn);
                currentContent.addClass(activeContent);
            }
        } else {
            const index = $(this).data('index');
            $tabBtn.removeClass(activeBtn);
            $(this).addClass(activeBtn)
            $tabContent.removeClass(activeContent);
            $('.js-tab-content[data-index="' + index + '"]').addClass(activeContent);
        }
    });
}

function moveContent(screenSize) {
    $tabBtn.removeClass(activeBtn);
    $tabContent.removeClass(activeContent);
    if(screenSize.matches) {
        $tabBtn.each(function() {
            const index = $(this).data('index');
            const currentContent = $('.js-tab-content[data-index="' + index + '"]');
            $(this).after(currentContent);
        });
    } else {
        $tabBtn.first().addClass(activeBtn);
        $tabContent.first().addClass(activeContent);
        $tabContent.each(function() {
            $tabsContainer.append($(this));
        });
    }
}

tabs();
moveContent(screenSize);
screenSize.addListener(moveContent);