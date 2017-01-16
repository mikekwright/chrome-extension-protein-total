$(function() {
  chrome.storage.sync.get('goal', function(items) {
    $('#goal').val(items.goal);
  });

  $('#save').click(function() {
    goal = $('#goal').val();
    if (goal) {
      chrome.storage.sync.set({ 'goal': goal }, function() {
        close(); // Close option tab
      });
    }
  });

  $('#reset').click(function() {
    chrome.storage.sync.set({ 'total': 0 }, function() {
      var notification_options = {
        type: 'basic',
        title: 'total reset!',
        message: 'Total has been reset back to 0.',
        iconUrl: 'icon.png'
      };
      chrome.notifications.create('reset', notification_options, function() {
      });
      //close(); // Close option tab
    });
  });

  $('close').click(function() {
    close();
  });
});
