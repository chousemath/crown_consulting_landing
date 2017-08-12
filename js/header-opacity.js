var range = 200;
$('#header-backdrop').css({ 'opacity': 0});
$(window).on('scroll', function () {
  var scrollTop = $(this).scrollTop(),
      height = $('#header-backdrop').outerHeight(),
      offset = height / 2,
      calc = 1 - (scrollTop - offset + range) / range;
  $('#header-backdrop').css({ 'opacity': calc });

  if (calc <= '-0.4') {
    $('#header-backdrop').css({ 'opacity': 0.4 });
  } else if (calc >= '0') {
    $('#header-backdrop').css({ 'opacity': 0 });
  } else {
    $('#header-backdrop').css({ 'opacity': -1 * calc });
  }
});
