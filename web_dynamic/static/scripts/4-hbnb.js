$('document').ready(function () {
   const amenId = {};
   $('INPUT[type="checkbox"]').click(function () {
     if ($(this).prop('checked')) {
       amenId[$(this).attr('data-id')] = $(this).attr('data-name');
     } else {
       delete amenId[$(this).attr('data-id')];
     }
     $('.amenities h4').text(Object.values(amenId).join(', '));
   });
 });
