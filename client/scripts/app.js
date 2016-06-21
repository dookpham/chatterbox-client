// YOUR CODE HERE:

var app = {

  currentRoom : 'lobby',

  rooms: {},

  init: function() {
      
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
      url: 'https://api.parse.com/1/classes/messages',
      type: 'GET',
      success: function (data) {
        data.results.forEach(function(val) {
          if (val.roomname === app.currentRoom) {
            app.addMessage(val);
          }
          if (val.roomname && app.rooms[val.roomname] === undefined) {
            app.rooms[val.roomname] = val.roomname;
            $('select').append($('<option>', {
              value: val.roomname,
              text: val.roomname
            }));
          }
        });
        
        console.log('chatterbox: Message sent', data);
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message');
      }
    });
  },

  clearMessages: function() {
    $('#chats').empty();
  },

  addMessage: function(message) {
    var regex = /[<>{}[\]=()]/gi;
    message.username = message.username || 'default';
    message.text = message.text || 'default';

    message.username = message.username.replace(regex, ' ');
    message.text = message.text.replace(regex, ' ');

    var $username = $('<p>' + message.username + '</p>').addClass('username'); 
    var mess = $('<p>' + message.text + '</p>');
    var msgDiv = $('<div></div>');

    msgDiv.append($username);
    msgDiv.append(mess);
     
    $('#chats').append(msgDiv);

    $username.click(app.addFriend);
  },

  addRoom: function(room) {
    var $room = $('<div></div>').addClass(room);
    $('#roomSelect').append($room);
  },

  addFriend: function() {
    console.log('addFriend');
  },

  handleSubmit: function(event) {
    
    event.preventDefault();

    var createRoom = $('#roomName').val() || app.currentRoom;
    
    var messageObj = {
      text: $('#message').val(),
      username: yrName,
      roomname: createRoom
    };

    app.send(messageObj);
    app.clearMessages();
    app.fetch();
    $('#message').val('');
    $('#roomName').val('');
  }
  
};

$('form').submit(app.handleSubmit);

app.fetch();

var yrName = prompt();

$( 'select' ).on( 'change', function( event, ui ) {
  console.log(event.target.value);

  app.currentRoom = event.target.value;
  app.clearMessages();
  app.fetch();
});




