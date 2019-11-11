
/*******************portofolio gallery*******************/
$(document).ready(function () {
    $('.carousel').carousel('pause').on('slid.bs.carousel', function () {
    curSlide = $('.active');
    if (curSlide.is(':first-child')) {
        $('.left').hide();
        $('.first').show();
        return;
    } else {
        $('.left').show();
        $('.first').hide();
    }
    if (curSlide.is(':last-child')) {
        $('.right').hide();
        $('.last').show();
        return;
    } else {
        $('.right').show();
        $('.last').hide();
    }
});
});
/*******************lang*******************/

$(".arabic").click(function () {
    $('body').toggleClass("ar").toggleClass('en');
    eraseCookie('Lang');
    createCookie("Lang", "AR", 1);
    console.log(readCookie("Lang") + "arabic");
});
$(".english").click(function () {
    $('body').toggleClass("ar").toggleClass('en');
    eraseCookie('Lang');
    console.log(readCookie("Lang") + "english");
    createCookie("Lang", "EN", 1);
    console.log(readCookie("Lang") + "english");
});

/*********saad*********/
console.log(readCookie("Lang") + "initial");
if (readCookie("Lang") == 'AR')
    $('body').addClass("ar");
if (readCookie("Lang") == 'EN') {
    $('body').addClass("en");
}
/*********saad*********/

/**********page height***********/
$('.innerContent').css('min-height', $(window).height());
$('.tab-pane').css('min-height', $(window).height());
$('.sideMenu').css('min-height', $(window).height());
$('.mainGallery').css('min-height', $(window).height());

/************collabse menu***************/
$(".coll").click(function () {
    $('body').toggleClass("dropup");
});
/*********************news slider*******************/
$('#myCarousel').carousel({
    interval: 4000
});
/*******************tooltip*********************/
$(function () {
    $('.social-network a').tooltip();
});
/***************Android stock browser****************/
$(function () {
    var nua = navigator.userAgent
    var isAndroid = (nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1)
    if (isAndroid) {
        $('select.form-control').removeClass('form-control').css('width', '100%')
    }
});

/***************hovered gallery******************/
$(function () {

    $(' #da-thumbs > li ').each(function () { $(this).hoverdir(); });

});
function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else var expires = "";
    document.cookie = name + "=" + value + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}
/*****scroll******/
if ($(window).width() > 769) {
    $(window).load(function () {
        $(".demo").customScrollbar();
        $("#fixed-thumb-size-demo").customScrollbar({ fixedThumbHeight: 50, fixedThumbWidth: 60 });
    })
}
/*************img height*****************/
$(document).ready(function () {
    var contH = $(window).height();
    $('.item img').css('maxHeight', (contH) + 'px');
    var imgH = $('.active img').height();
    var marg = (contH) - (imgH);
 
    $('.active').css('marginTop', (marg) * .5 + 'px');
  $('.item img').css('height', (contH) * .75 + 'px');
   $('.item').css('marginTop', (contH) * .125 + 'px'); 
});
$(".carousel-control").click(function () {
    var actH = $('.active img +.item img').height();
    $('.carousel-water').css('top', (actH) + 'px');

    var contH = $(window).height();
    $('.active img +.item img').css('maxHeight', (contH) + 'px');
    var imgH = $('.active img +.item img').height();
    var marg = (contH) - (imgH);
   
    $('.active img +.item').css('marginTop', (marg) * .5 + 'px');
})
