$(function() {
  $('#addAmount').focus();
  var goal = 0;

  chrome.storage.sync.get('total', function(items) {
    $('#total').text(items.total);
  });

  chrome.storage.sync.get('goal', function(items) {
    $('#goal').text(items.goal);
    goal = parseInt(items.goal);
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

      if (newTotal >= goal) {
        var options = {
          type: 'basic',
          title: 'Congrats!',
          message: 'You have reached your goal!',
          iconUrl: 'icon.png'
        };
        chrome.notifications.create('congrats', options, function() {
        });
      }


    });

    // This will disable the empty action
    return false;
  });
});
