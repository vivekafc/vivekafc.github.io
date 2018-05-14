var $target = $('.wrapper');
inView('.section').on('enter', function(el){
  var color = $(el).attr('data-background-color');
  $target.css('background-color', color );
});

function fadeIn(obj) {
    $(obj).fadeIn(4000);
}

function showImages(el) {
    var windowHeight = jQuery( window ).height();
    $(el).each(function(){
        var thisPos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (topOfWindow + windowHeight - 200 > thisPos ) {
            $(this).addClass("fadeIn");
        }
    });
}
/*
// if the image in the window of browser when the page is loaded, show that image
$(document).ready(function(){
    showImages('.star');
});
*/
// if the image in the window of browser when scrolling the page, show that image
$(window).scroll(function() {
    showImages('.star');
});