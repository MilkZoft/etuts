var disqus_shortname = 'etutsco';

$(function(){
  var menu = $('nav ul'),
      menuHeight  = menu.height();

  $('.pull').on('click', function(e) {
    e.preventDefault();

    if ($('.nav-mobile-menu').hasClass('no-display')) {
      $(".nav-mobile-menu").slideToggle(1000).removeClass('no-display');
      $(".nav-mobile i").removeClass('fa-sort-desc').addClass('fa-sort-asc');
    } else {
      $(".nav-mobile-menu").slideToggle(1000).addClass('no-display');
      $(".nav-mobile i").removeClass('fa-sort-asc').addClass('fa-sort-desc');
    }
  });

  $(window).resize(function() {
    if ($(window).width() > 768) {
      $(".nav-mobile-menu").addClass('no-display').removeAttr("style");
        $(".nav-mobile i").removeClass('fa-sort-asc').addClass('fa-sort-desc');
    }
  });

  var offset = 200;
  var duration = 500;

  $(window).scroll(function() {
    if ($(this).scrollTop() > offset) {
      $('.scroll-to-top').fadeIn(duration);
    } else {
      $('.scroll-to-top').fadeOut(duration);
    }
  });
    
  $('.scroll-to-top').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: 0}, duration);    
    return false;
  });

  var s = document.createElement('script'); 
  s.async = true;
  s.type = 'text/javascript';
  s.src = 'http://' + disqus_shortname + '.disqus.com/count.js';
  (document.getElementsByTagName('HEAD')[0] || document.getElementsByTagName('BODY')[0]).appendChild(s);
});