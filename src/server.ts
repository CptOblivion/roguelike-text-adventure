var express = require('express');
var path = require('path');

var server = express();

var PORT = 3000;

server.use(express.static(path.join(__dirname, 'public')));

server.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

server.listen(PORT, function () {
  console.log('Listening on port', PORT);
});
