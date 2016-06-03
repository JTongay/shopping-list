$(document).ready(function () {
  // add item on button click //
  $(document).on('submit', '#add', addListItem);
  event.preventDefault();


});

function addListItem() {
  var text = $('#textbox').val();
  $('.i-need').append('<ul id="need_list"><li class="items">' + text + '</li></ul>');
  $('#textbox').val('');
}
