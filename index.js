const http = require('http');
const url = require('url');
const routers = require('./router');
const config = require('./config');

var serverRequestCallback = function(req,resp)
{
  
    var parsedUrl = url.parse(req.url);
    var path = parsedUrl.pathname;
    path = path.replace(/^\/+|\/+$/g,'');
    var data = {
        'path':path,
        'headers':req.headers,
        'method':req.method.toUpperCase()
    }
    var selectedHandler = typeof routers[path] != 'undefined'? routers[path] : routers.notFound;

    selectedHandler(data,function(statusCode,payload){
        statusCode = typeof statusCode != 'number'?404:statusCode;
        payload = typeof payload != 'object'? {}:payload;

        resp.setHeader('Content-Type','application/json');
        resp.writeHead(statusCode);
        resp.end(JSON.stringify(payload));

    });

}

var server = http.createServer(serverRequestCallback);

server.listen(config.port,function(){
console.log("listening to port:" + config.port + " at env "+config.envName);
});