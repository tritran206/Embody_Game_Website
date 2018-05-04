
$('.nav-side .nav-toggle').on('click', function(e){
    e.preventDefault();
    $(this).parent().toggleClass('nav-open');
});

(function (){
  var body = $('body');
  $('.menu-toggle').bind('click', function() {
    body.toggleClass('menu-open');
    return false;
  });
})();

; (function ($) {
    'use strict';
    var $body   = $('html, body'),
        content = $('#main').smoothState({
        onStart: {
            duration: 250,
            render: function (url, $container) {
                content.toggleAnimationClass('is-exiting');
                $body.animate({ 'scrollTop': 0 });
            }
        }
    }).data('smoothState');
})(jQuery);

$(function() {
  setTimeout(function(){
    $('.fly-in-text').removeClass('hidden');
  }, 500);
})();
// </script>
// <script>
(function() {
  var body = $('body');
  $('.menu-toggle').bind('click', function() {
      body.toggleClass('menu-open');
      return false;
  });
})();
(function() {
  var body = $('.bgvid');
  $('.menu-toggle').bind('click', function() {
      body.toggleClass('menu-open');
      return false;
  });
})();

  $(document).ready(function(){
      $('.purpleText').delay(63000);
      $('.purpleText').fadeIn(2000);
      $('.fly-in-text').delay(63000)
      $('.fly-in-text').fadeOut(2000)
      $('#description').delay(3000);
      $('#description').fadeIn(2000);
      $('#description').delay(8000);
      $('#description').fadeOut(2000);
      $('#fact1').delay(15000);
      $('#fact1').fadeIn(2000);
      $('#fact1').delay(4000);
      $('#fact1').fadeOut(2000);
      $('#fact2').delay(23000);
      $('#fact2').fadeIn(2000);
      $('#fact2').delay(4000);
      $('#fact2').fadeOut(2000);
      $('#fact3').delay(31000);
      $('#fact3').fadeIn(2000);
      $('#fact3').delay(4000);
      $('#fact3').fadeOut(2000);
      $('#fact4').delay(39000);
      $('#fact4').fadeIn(2000);
      $('#fact4').delay(4000);
      $('#fact4').fadeOut(2000);
      $('#fact5').delay(47000);
      $('#fact5').fadeIn(2000);
      $('#fact5').delay(4000);
      $('#fact5').fadeOut(2000);
      $('#fact6').delay(55000);
      $('#fact6').fadeIn(2000);
      $('#fact6').delay(4000);
      $('#fact6').fadeOut(2000);
      $('#fact7').delay(63000);
      $('#fact7').fadeIn(2000);
      $('#fact7').delay(4000);
  });
