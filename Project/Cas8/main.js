const $btn = $('.btn');
const rem = 'rem';
const add = 'set';
const get = 'get';

function localStrg() {

    $btn.on('click', function() {
        if($(this).hasClass(add)) {
            localStorage.setItem('key', 'david');
        } else if($(this).hasClass(get)) {
            const getValue = localStorage.getItem('key');
            $('.text').text(getValue);
        } else if($(this).hasClass(rem)) {
            localStorage.removeItem('key');
            $('.text').empty();
        } else {
            localStorage.clear();
            $('.text').empty();
        }
    });
}

function sessionStrg() {
    $btn.on('click', function() {
        if($(this).hasClass(add)) {
            sessionStorage.setItem('key', 'david');
        } else if($(this).hasClass(get)) {
            const getValue = sessionStorage.getItem('key');
            $('.text').text(getValue);
        } else if($(this).hasClass(rem)) {
            sessionStorage.removeItem('key');
            $('.text').empty();
        } else {
            sessionStorage.clear();
            $('.text').empty();
        }
    });

}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }


function cookieStrg() {
    $btn.on('click', function() {
        if($(this).hasClass(add)) {
            setCookie('keyTest','value', 3);
        } else if($(this).hasClass(get)) {
            const getData = getCookie('keyTest');
            $('.text').text(getData);
        }
    });
}
// localStrg();
// sessionStrg();
// cookieStrg();

function dropdown() {
    const $btn = $('.js-drop-btn');
    const $liBtn = $('.js-li-btn');
    const active = 'dropdown-btn-active';

    $btn.on('click', function() {
        $(this).toggleClass(active);
        $(this).next().stop().slideToggle();
    });

    $liBtn.on('click', function() {
        const text = $(this).text();
        $btn.text(text).removeClass(active);
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