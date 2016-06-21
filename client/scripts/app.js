// YOUR CODE HERE:

var app = {
  // don't know what this is for  
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

  rooms: {
    lobby: 'lobby',
  },
  
  fetch: function() {
    $.ajax({
    // This is the url you should use to communicate with the parse API server.
      url: 'https://api.parse.com/1/classes/messages',
      type: 'GET',
      // data: JSON.stringify(message),
      // contentType: 'application/json',
      success: function (data) {
        data.results.forEach(function(val) {
          app.addMessage(val);
          if (val.roomname) {
            app.rooms[val.roomname] = val.roomname;
          }
        //   $('#mySelect').append($('<option>', { 
        // value: item.value,
        // text : item.text 
        });
        for (var key in app.rooms) {
          $('select').append($('<option>', {
            value: key,
            text: key
          }));
        }
        $( 'select' ).on( 'selectmenuselect', function( event, ui ) {
          console.log('select:', event, ui);

        } );
        console.log('chatterbox: Message sent',data);
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
    var regex = /[<>{}[\]=()]/gi;
    message.username = message.username || 'default';
    message.text = message.text || 'default';

    message.username = message.username.replace(regex, ' ');
    message.text = message.text.replace(regex, ' ');

    // message.text.replace('<script>', ' ');

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
    console.log('butts');
    console.log($('#message').val());
    event.preventDefault();

    var currentRoom = currentRoom || 'lobby';
    var messageObj = {
      text: $('#message').val(),
      username: yrName,
      roomname: currentRoom
    };

    app.send(messageObj);
    app.clearMessages();
    app.fetch();
    $('#message').val('');
  }
  
};
// app.init();
// $('.submit').click(app.handleSubmit);
$('form').submit(app.handleSubmit);

app.fetch();

var yrName = prompt();
console.log(yrName);



