$('.level-toggle').click(function() {
  $('.level-content').slideUp(200);
  $(this).closest('.level').find('.level-content').slideToggle(200, function() {
    $('map').imageMapResize();
  });
});


$('area').on('click', function() {
  var name = $(this).attr('name');

  $('#overlay').fadeIn(300);
  if (name === "store") {
    $('#level1-popup-store').fadeIn(300);
  } else if (name === "cafe") {
    $('#level1-popup-cafe').fadeIn(300);
    $(window).trigger('resize');
  } else if (name === "quake") {
    $('#level1-popup-quake').fadeIn(300);
    $(window).trigger('resize');
  }
});

$('#overlay').click(function() {
  $('.popup').fadeOut(300);
  $('#overlay').fadeOut(300);
});
