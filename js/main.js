$(function () {
  // add item on button click //
  $(document)
    .on('click', '#add', addListItem);
  .on('keydown', '#textbox', addWithEnterKey);
  .on('click', '.done', finishItem);
  .on('click', '.delete', deleteListItem);
  /*
  $('#textbox').keydown(function (event) {
    var keycode = event.keyCode ? event.keyCode : event.which;
    if (keycode === 13) {
      addListItem();
    }
    This almost worked. The page just reloaded right after it showed without the new text added.
  })
  */


  //$('.delete').on('click', deleteListItem);
  //$('.done').on('click', finishItem);





});
//adds text from textbox
function addListItem() {
  event.preventDefault();
  var text = $('#textbox').val();
  if (text.trim().length === 0) {
    alert('You must enter an item.');
    return;
  }
  $('.i-need').append('<ul class="need_list"><li class="items"><input type="checkbox" class="done"/><span>  ' + text + '</span><button class="delete">x</button></li></ul>');
  //sets textbox to empty once item is entered
  $('#textbox').val('');


}

function addWithEnterKey() {
  event.preventDefault();
  //uses enter key to work as well
  $('#textbox').keydown(function (e) {
    if (e.which === 13) {
      addListItem();
      event.preventDefault();
    }
  })
}
//delete button works
function deleteListItem() {
  $(this).parent().remove();
}
//puts text decorations on checkbox
function finishItem() {
  event.preventDefault();
  if ($(this).parent().css('textDecoration') == 'line-through') {
    $(this).parent().css('textDecoration', 'none').css('color', '#1ADB37');
  } else {
    $(this).parent().css('textDecoration', 'line-through').css('color', '#EE816E');
  }
}
