var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var session_messages =[];

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){

    socket.on('plot', function(msg){
      var data= {'id':msg.id,'val':msg.val}
      console.log(data);
    io.emit('plot', data);
  });
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

function insertInArray(msg,session_messages)
{
	var obj={
		'name':msg.name,
		'msg':msg.message
	}
	session_messages.push(obj);
}
function initilizeMsg()
{

}