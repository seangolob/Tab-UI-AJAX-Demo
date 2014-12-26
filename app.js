var cache = {},
    $displayArea = $('.display-area');

$(document).ready(function () {
  $.get('pages/tab1.html', function (data) {
    $displayArea.html(data);
    cache[page] = data;
  });
});

$('.ajax-tabs li').on('click', function () {
  var $displayArea = $('.display-area'),
      page = $(this).attr('data-tab') || 'tab1';

  $(this).addClass('selected').siblings().removeClass('selected');

  if (cache[page]) {
    $displayArea.html(cache[page]);
  } else {
    $.get('pages/' + page + '.html', function (data) {
      $displayArea.html(data);
      cache[page] = data;
    });
  }
});
