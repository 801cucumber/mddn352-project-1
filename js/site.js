$('.level-toggle').click(function() {
  $('.level-content').slideUp(200);
  $(this).closest('.level').find('.level-content').slideToggle(200);
});

// a cross reference of area names to text to be shown for each area
 var xref = {
     cafe: "<b>Te Papa Cafe</b> has stuff you eat!",
     store: "<b>Te Papa Store</b> has stuff you buy. "
         +"Give us the money."
 };

 var defaultDipTooltip = '';

 var image = $('#level-1-map');

 image.mapster(
 {
     fillOpacity: 0.4,
     fillColor: "d42e16",
     stroke: true,
     strokeColor: "038DB1",
     strokeOpacity: 0.8,
     strokeWidth: 2,
     singleSelect: true,
     mapKey: 'name',
     listKey: 'name',
     onClick: function (e) {
         var newToolTip = defaultDipTooltip;

         // update text depending on area selected
         $('#selections').html(xref[e.key]);

         image.mapster('set_options', {
             areas: [{
                 key: "dip",
                 toolTip: newToolTip
                 }]
             });
     },
     showToolTip: true,
     toolTipClose: ["tooltip-click", "area-click"],
     areas: [
         {
             key: "cafe",
             fillColor: "ffffff"
         },
         {
             key: "store",
             fillColor: "ffffff"
         }
         ]
 });
