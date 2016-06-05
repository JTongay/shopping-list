$(document).ready(function () {
  // add item on button click //
  $(document).on('click', '#add', addListItem);
  /*
  $('#textbox').keydown(function (event) {
    var keycode = event.keyCode ? event.keyCode : event.which;
    if (keycode === 13) {
      addListItem();
    }
    This almost worked. The page just reloaded right after it showed without the new text added.
  })
  */
  /*
  $('#textbox').keydown(function (e) {
    if (e.which === 13) {
      addListItem();
    }
  })
  same thing happened here
  */
  event.preventDefault();

  //$('.delete').on('click', deleteListItem);
  //$('.done').on('click', finishItem);
  $(document).on('click', '.done', finishItem);
  $(document).on('click', '.delete', deleteListItem);




});
//adds text from textbox
function addListItem() {
  var text = $('#textbox').val();
  if (text.trim().length === 0) {
    alert('You must enter an item.');
    return;
  }
  $('.i-need').append('<ul class="need_list"><li class="items"><input type="checkbox" class="done"/><span>  ' + text + '</span><button class="delete">x</button></li></ul>');
  //sets textbox to empty once item is entered
  $('#textbox').val('');

}
//delete button works
function deleteListItem() {
  $(this).parent().remove();
}
//puts text decorations on checkbox
function finishItem() {
  if ($(this).parent().css('textDecoration') == 'line-through') {
    $(this).parent().css('textDecoration', 'none').css('color', '#1ADB37');
  } else {
    $(this).parent().css('textDecoration', 'line-through').css('color', '#EE816E');
  }
}
