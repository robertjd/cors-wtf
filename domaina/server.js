var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {


  res.end(fs.readFileSync('./index.html'));



}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');