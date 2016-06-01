(function () {
  $(document).ready(function () {
    // add item on button click //
    $('#add').click(addItem);
  });

  function addItem() {
    var newItem = $('#textbox').val();
    if (newItem.trim().length === 0) {
      alert("You must enter an item to be added!");
      return;
    }
    var listItem = createListItem(newItem);
    $('#ulList').append(listItem);
    $('#textbox').val('');
  }

  function createListItem(newItem) {
    var listItem = "<li class='ui-state-default'><input type='checkbox'>";
    listItem += "<span>" + newItem + "</span>";
    listItem += "<a href='#'>remove</a></li>";
    return listItem;
  }
})();
