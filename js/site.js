$('.level-toggle').click(function() {
  $('.level-content').slideUp(200);
  $(this).closest('.level').find('.level-content').slideToggle(200);
});

$('map').imageMapResize();
