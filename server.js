var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  console.log(req.headers.host,req.method,req.headers['content-type'] || '',req.url);

  if(req.url.match(/^\/redirect/)){
    if(req.method==='OPTIONS'){
      res.writeHead(200, {
        'Access-Control-Allow-Origin': 'http://a.com:1337',
        'Access-Control-Allow-Headers': 'Authorization,Content-type'
      });
      res.end();
    }else{
      res.writeHead(200, {
        'Access-Control-Allow-Origin': 'http://a.com:1337',
        'Access-Control-Expose-Headers': 'Location',
        'Location': 'http://b.com:1337/#register&access_token=2YotnFZFEjr1zCsicMWpAA&state=CLIENT_STATE&token_type=implicit&expires_in=3600'
      });
      res.end();
    }
  }
  else if(req.url==="/gettableResource"){
    res.writeHead(200, {
      'Content-type': 'application/json',
      'Access-Control-Allow-Headers': 'Authorization,Content-type',
      'Access-Control-Allow-Origin': 'http://a.com:1337'
    });
    res.end(JSON.stringify({'hello':'world'}));
  }
  else if(req.url==="/js.js"){
    res.writeHead(200, {'Content-type': 'text/javascript'});
    res.end(fs.readFileSync('./js.js'));
  }else if(req.headers.host.match(/a.com/)){
    res.writeHead(200, {'Content-type': 'text/html'});
    res.end(fs.readFileSync('./domaina.html'));
  }else if(req.headers.host.match(/b.com/)){
    res.writeHead(200, {'Content-type': 'text/html'});
    res.end(fs.readFileSync('./domainb.html'));
  }else{
    res.writeHead(200, {'Content-type': 'text/html'});
    res.end('not found');
  }

}).listen(1337, '0.0.0.0');
console.log('Server running at http://127.0.0.1:1337/');