$(document).ready(function() {
	runIntro();
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
  	playHadouken();
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
  });


    $(document).keydown(function(e) {
    if (e.keyCode == 88) {
    	playCool();
      $('.ryu-ready').hide();
      $('.ryu-still').hide();
      $('.ryu-cool').show();
    }   
  }).keyup(function(e) {
    if (e.keyCode == 88) {
      $('#cool-sound')[0].pause();
      $('#cool-sound')[0].load();
      $('.ryu-cool').hide();
      $('.ryu-still').show();
    }
  });
});

function playHadouken() {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
	$('#intro-song')[0].pause();
}

function playCool() {    	
    	$('#cool-sound')[0].play();
    	$('#intro-song')[0].pause();
    }

function runIntro() {
	$('#intro-song')[0].play();
  	$('.street-fighter-logo').fadeIn(3500, function() {
    $(this).fadeOut(1000, function() {
    $('.brought-to-you').fadeIn(1500, function() {
    $(this).fadeOut(1000, function() {
    $('.jquery-logo').fadeIn(1500, function() {
    $(this).fadeOut(1500, function() {
    $('.instructions').fadeIn(1000);
            });
          })
        })
      })
    })
  })
}