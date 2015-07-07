var http = require('http');//包子店模板

// request 服务员的耳朵 response 服务员的嘴巴
var waiter = function(request,response){
    var url = request.url;
    var method = request.method;
    var host = request.headers['host'];
    ponse.setHeader('Content-Type','text/html');
    response.end(url+'<br>'+method+'<br>'+host);//结束说话
}

//创建霍营包子店
var server = http.createServer(waiter);

//开门接待客人了
server.listen(8080,'0.0.0.0');


