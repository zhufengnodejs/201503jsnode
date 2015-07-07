var http = require('http');
var fs = require('fs');
var mime = require('mime');
var users = [];
http.createServer(function(req,res){
    var url = req.url;
    if(url == '/'){
        fs.readFile("index.html","utf8",function(err,data){
            res.end(data);
        });
    } else if(url == '/addUser'){
        req.on('data',function(chunk){
            console.log(chunk);
            users.push(chunk);
        });
        req.on('end',function(){
            res.end(users);
        })
    }else{
        res.setHeader('Content-Type',mime.lookup(url));
       fs.readFile(url.slice(1),function(err,data){
           if(err){
               res.end('not found');
           }else{
               res.end(data);
           }

        });
    }

}).listen(8080);