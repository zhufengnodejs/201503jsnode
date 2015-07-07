var http = require('http');//包子店模板

// request 服务员的耳朵 response 服务员的嘴巴
var waiter = function(request,response){
    var url = request.url;
    var method = request.method;
    var host = request.headers['host'];
    response.setHeader('Content-Type',
        'text/html;charset=utf-8');
    var menu = '<ul>';
    menu+='<li>牛肉大葱包子</li>';
    menu+='<li>鲜肉包子</li>';
    menu+='<li>韭菜鸡蛋包子</li>';
    menu+='<li>雪花啤酒</li>';
    menu+='</ul>';
    response.end(menu);//结束说话
}

//创建霍营包子店
var server = http.createServer(waiter);

//开门接待客人了
server.listen(8080,'0.0.0.0');


