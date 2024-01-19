$(function(){
    $('.btn-list').click(function(){
        $('#gnb').show();
    });
    $('.closebox').click(function(){
        $('#gnb').hide();
    });
    //main-nav
$('.main-nav a').hover(function(){
    $('.header-background').stop().slideToggle(200);
    $('.main-nav a, .logo, .btn-h-line, .ri-global-line, .ri-serch-line').stop().toggleClass("black-font");
    $('.searchform, .btn-h-line').toggleClass("blck-border")
    });
});
