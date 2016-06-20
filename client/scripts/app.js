// YOUR CODE HERE:
var app = {
  // don't know what this is for  
  init: function() {},

  send: function(message) {
    $.ajax({
    // This is the url you should use to communicate with the parse API server.
      url: 'https://api.parse.com/1/classes/messages',
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message sent');
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message', data);
      }
    });
  },

  fetch: function() {
    $.ajax({
    // This is the url you should use to communicate with the parse API server.
      // url: 'https://api.parse.com/1/classes/messages',
      type: 'GET',
      // data: JSON.stringify(message),
      // contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message sent');
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message');
      }
    });
  },

  clearMessages: function() {
    // grab the chats div and remove all children appended to it
    $('#chats').empty();
  },

  addMessage: function(message) {
    var $message = $('<p></p>');
    $message.text(message);
    $('#chats').append($message);
  },

  addRoom: function(room) {
    var $room = $('<div></div>').addClass(room);
    $('#roomSelect').append($room);
  }
};


