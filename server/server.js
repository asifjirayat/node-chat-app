const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '/../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('new user connected');

  socket.emit('newMessage', {
    from: 'Asif',
    text: 'Hello',
    createdAt: 123
  });

  socket.on('createMessage', (newMessage) => {
    console.log('New message from client:', newMessage);
  });

  socket.on('disconnect', (socket) => {
    console.log('User Disconnected');
  });
});

server.listen(port, () => {
  console.log(`Server is up on port: ${port}`);
});
