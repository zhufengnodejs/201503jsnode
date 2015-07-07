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
            users.push(change(chunk.toString()));
        });
        req.on('end',function(){
            res.end(JSON.stringify(users));
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

function change(url) {
    var reg = /([^?&=]+)=([^?&=]+)/g, obj = {};
    url.replace(reg, function () {
        obj[arguments[1]] = arguments[2];
    });
    return obj;
}