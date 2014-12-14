function addListItem() {
  var newItem = $('#newItem');
  var add = newItem.val();
  var itemList = $('#itemList')
  var singleItem = $('<li><button class="check">X</button>' + add + '</li>');

  itemList.append(singleItem);
  $(newItem).val('');

}

function strikeItem() {
    $('li').toggleClass('strikethrough');
}

$(function() {
  var button = $('#addItem');
  var newItem = $('#newItem');
  var list = $('#itemList');
  button.on('click', addListItem);
  button.on('keypress', addListItem);
  list.on('click', '.check', strikeItem);
  newItem.on('keydown', function(e) {
        if (e.which == 13) {
            addListItem();
        }
    });
});