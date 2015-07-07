var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){
    var url = req.url;
    if(url == '/'){
        var content=fs.readFileSync("index.html","utf8");
        res.end(content);
    }else if(url == '/listener.js'){
        var content=fs.readFileSync("listener.js","utf8");
        res.end(content);
    }

}).listen(8080);