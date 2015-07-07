var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){
    var url = req.url;
    if(url == '/'){
        fs.readFile("index.html","utf8",function(err,data){
            res.end(data);
        });

    }else if(url == '/listener.js'){
       fs.readFile("listener1.js","utf8",function(err,data){
           if(err){
               res.end('not found');
           }else{
               res.end(data);
           }

        });
    }

}).listen(8080);