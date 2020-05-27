const express = require('express');
const app = express();
const http = require('http');
const socketio = require('socket.io');

const server = http.createServer(app);
const io = socketio(server);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server Started on PORT: ${PORT}`));
