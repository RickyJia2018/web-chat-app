var express = require('express');
var socket = require('socket.io');

var app = express();

var server = app.listen(4000,()=>{
    console.log('Listening on port 4000.');
    
});

//Static files

app.use(express.static('public'));

//Socket setup
var io = socket(server);

io.on('connection',(socket)=>{
    console.log('made socket connection');
    socket.on('chat',(data)=>{
        io.sockets.emit('chat',data);
    })
    socket.on('typing',(data)=>{
        socket.broadcast.emit('typing',data);
    })
})

