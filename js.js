
(function(){

  function postExample(){

    var url = 'http://b.com:1337/redirect';
    var method = 'POST';

    if(typeof XDomainRequest !== 'undefined'){
      var xdr = new XDomainRequest();
      xdr.onerror = function(e){console.error(e);};
      xdr.ontimeout = function(e){console.error(e);};
      xdr.onprogress = function(e){console.log(e);};
      xdr.onload = function(){
        var h =xdr.getAllResponseHeaders();
        console.log('headers',typeof h, h);
      };
      xdr.open(method, url);
      xdr.send('');
    }else{
      var xhr = new XMLHttpRequest();
      xhr.open(method,url);
      xhr.onreadystatechange = function(a,b){
        console.log(this.readyState);
        if(this.readyState===4){
          var h =xhr.getAllResponseHeaders();
          console.log('headers',typeof h, h);
          document.getElementById('response').innerText = h;
        }
      };
      xhr.setRequestHeader('Accept','application/json');
      xhr.setRequestHeader('Content-type','application/json');
      xhr.setRequestHeader('Authorization','Bearer 1234');
      xhr.send(JSON.stringify({'blahblah':'account stuff'}));
    }
  }

  function getExample(){

    var url = 'http://b.com:1337/gettableResource';
    var method = 'GET';

    if(typeof XDomainRequest !== 'undefined'){
      var xdr = new XDomainRequest();
      xdr.onerror = function(e){console.error(e);};
      xdr.ontimeout = function(e){console.error(e);};
      xdr.onprogress = function(e){console.log(e);};
      xdr.onload = function(){
        var h =xdr.getAllResponseHeaders();
        console.log('headers',typeof h, h);
      };
      xdr.open(method, url);
      xdr.send('');
    }else{
      var xhr = new XMLHttpRequest();
      xhr.open(method,url);
      xhr.onreadystatechange = function(a,b){
        if(this.readyState===4){
          document.getElementById('response').innerText = xhr.responseText;
        }
      };
      xhr.setRequestHeader('Accept','application/json');
      xhr.setRequestHeader('Content-type','application/json');
      xhr.setRequestHeader('Authorization','Bearer 1234');
      xhr.send();
    }
  }
  // postExample();
  getExample();
})();