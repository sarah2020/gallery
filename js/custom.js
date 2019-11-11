jQuery(document).ready(function ($) {

    $(".english").click(function () {
   document.body.className = 'en';
});
    $(".arabic").click(function () {
        document.body.className = 'ar';
});
});
/**********page height***********/
$('.innerContent').css('min-height', $(window).height());
$('.tab-pane').css('min-height', $(window).height());
$('.sideMenu').css('min-height', $(window).height());
/***************************/
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
})
/***************hovered gallery******************/
$(function () {

    $(' #da-thumbs > li ').each(function () { $(this).hoverdir(); });

});
/****************lang*****************
$(".arabLang").toggleClass(function () {
    $('body').addClass('arabic');
});
/*
$(".engLang").click(function () {
    $('body').removeClass('arabic');
});
$("#lang1").click(function () {
    $('#lang2').text($(this).text() == 'English');
    $('#lang2').text($(this).text() == 'العربية');
    $('#lang2').addClass('arabLang').removeClass('engLang');
    $('#lang1').addClass('engLang').removeClass('arabLang');
});
$("#lang2").click(function () {
    $('#lang1').text($(this).text() == 'العربية');
    $('#lang2').text($(this).text() == 'English');
   $('#lang1').addClass('arabLang').removeClass('engLang');
    $('#lang2').addClass('engLang').removeClass('arabLang');
});
 */