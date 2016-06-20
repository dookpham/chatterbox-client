// YOUR CODE HERE:

var app = {
  // don't know what this is for  
  init: function() {
    $('.submit').submit(app.handleSubmit);  
  },

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

    // {
    //   username: 'Mel Brooks',
    //   text: 'I didn\'t get a harumph outa that guy.!',
    //   roomname: 'lobby'
    // }

    // <span class='username'>
    // </span>
    // <p class='message'>
    // </
    
    var $message = $('<div></div>');
    var $username = $('<p></p>').addClass('username').text(message.username);
    var $txt = $('<p></p>').text(message.text);

    $username.click(app.addFriend);

    $message.append($username);
    $message.append($txt);

    
    $('#chats').append($message);
  },

  addRoom: function(room) {
    var $room = $('<div></div>').addClass(room);
    $('#roomSelect').append($room);
  },

  addFriend: function() {

  },

  handleSubmit: function(event) {
    // var obj = {
    //   username: '',
    //   text: 'Why so many Mel Brooks quotes?',
    //   roomname: 'unknown'
    // };
    // this.addMessage(obj);
    console.log('heh');
  }
  
};

app.init();






