$(function() {
  $('#addAmount').focus();

  chrome.storage.sync.get('total', function(items) {
    $('#total').text(items.total);
  });

  //$('#addAmount').click(function() {
  $('#amountForm').submit(function() {
    // This will basically use sync if you want to go back and forth
    chrome.storage.sync.get('total', function(items) {
      var newTotal = 0;
      if (items && items.total) {
        newTotal += parseInt(items.total);
      }

      var amount = $('#amount').val();
      if (amount) {
        newTotal += parseInt(amount);
      }

      chrome.storage.sync.set({ 'total': newTotal });
      $('#total').text(newTotal);
      // Clear the text field
      $('#amount').val(''); 
    });

    // This will disable the empty action
    return false;
  });
});
