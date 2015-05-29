$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    $('.ryu-still').show();
    $('.ryu-ready').hide();
  })
  .mousedown(function() {
    //Play hadouken sound
    //Show hadouken and animate it to the right of the screen
  	$('.ryu-ready').hide();
  	$('.ryu-throwing').show();
    $('.hadouken').finish().show().animate(
      {'left': '1020px'}, 500,
      function() {
        $(this).hide();
        $(this).css('left', '520px');
      });

  })
  .mouseup(function() {
    //Ryu goes back to his ready position
    $('.ryu-ready').show();
    $('.ryu-throwing').hide();

  })
  ;
 

});