$('.level-toggle').click(function() {
  $('.level-content').slideUp(200);
  $(this).closest('.level').find('.level-content').slideToggle(200);
});

// a cross reference of area names to text to be shown for each area
 var xref = {
     cafe: "<b>Carrots</b> are delicious and may turn your skin orange!",
     store: "<b>Asparagus</b> is one of the first vegetables of the spring. "
         +"Being a dark green, it's great for you, and has interesting side effects."
 };

 var defaultDipTooltip = 'I know you want the dip. But it\'s loaded with saturated fat, just skip it '
     +'and enjoy as many delicious, crisp vegetables as you can eat.';

 var image = $('#level-1-map');

 image.mapster(
 {
     fillOpacity: 0.4,
     fillColor: "d42e16",
     stroke: true,
     strokeColor: "3320FF",
     strokeOpacity: 0.8,
     strokeWidth: 4,
     singleSelect: true,
     mapKey: 'name',
     listKey: 'name',
     onClick: function (e) {
         var newToolTip = defaultDipTooltip;

         // update text depending on area selected
         $('#selections').html(xref[e.key]);

         // if Asparagus selected, change the tooltip
         if (e.key === 'cafe') {
             newToolTip = "OK. I know I have come down on the dip before, but let's be real. "
                 +"Raw asparagus without any of that delicious ranch and onion dressing "
                 +"slathered all over it is not so good.";
         }
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
             fillColor: "000000"
         }
         ]
 });
