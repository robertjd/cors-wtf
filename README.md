### proofs for cross-origin-request issues

use your `/etc/hosts` file to point `a.com` and `b.com` at `127.0.0.1`

use `node server.js` to run the server

go to `http://a.com:1337` in your browser

inspect the network requests to see what's going on

hate on ie

### reads:

http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx

http://msdn.microsoft.com/en-us/library/ie/cc288060(v=vs.85).aspx

https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest

https://hacks.mozilla.org/2009/07/cross-site-xmlhttprequest-with-cors/

https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy

### hacks:


http://hayageek.com/cross-domain-ajax-jquery-without-cors/

https://github.com/jpillora/xdomain/

https://github.com/jpillora/xhook