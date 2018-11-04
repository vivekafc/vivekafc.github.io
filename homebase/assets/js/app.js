$(window).load(function(){ // This runs when the window has loaded
var img = $("<img />").attr('src', 'YourImagePath/img.jpg').load(function() { 
            $("#a1").append(img); 
// When the image has loaded, stick it in a div
    });

var img2 = $("<img />").attr('src', 'YourImagePath/img2.jpg').load(function() {
            $("#a2").append(img2);
    });	
});


function handle(delta) {
    var animationInterval = 20; //lower is faster
  var scrollSpeed = 20; //lower is faster

    if (end == null) {
    end = $(window).scrollTop();
  }
  end -= 20 * delta;
  goUp = delta > 0;

  if (interval == null) {
    interval = setInterval(function () {
      var scrollTop = $(window).scrollTop();
      var step = Math.round((end - scrollTop) / scrollSpeed);
      if (scrollTop <= 0 || 
          scrollTop >= $(window).prop("scrollHeight") - $(window).height() ||
          goUp && step > -1 || 
          !goUp && step < 1 ) {
        clearInterval(interval);
        interval = null;
        end = null;
      }
      $(window).scrollTop(scrollTop + step );
    }, animationInterval);
  }
}


document.body.className += ' fade-out';
$(function() {
    $('body').removeClass('fade-out');
});

ScrollReveal().reveal('h1');
ScrollReveal().reveal('h2');
ScrollReveal().reveal('h6');
ScrollReveal().reveal('p');
ScrollReveal().reveal('left');
ScrollReveal().reveal('left1');
ScrollReveal().reveal('left2');
ScrollReveal().reveal('left3');
ScrollReveal().reveal('left4');
ScrollReveal().reveal('right');
ScrollReveal().reveal('right1');
ScrollReveal().reveal('right2');
ScrollReveal().reveal('right3');
ScrollReveal().reveal('right4');
