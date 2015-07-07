var http = require('http');//包子店模板

// request 服务员的耳朵 response 服务员的嘴巴
var waiter = function(request,response){
    var url = request.url;
    var method = request.method;
    var host = request.headers['host'];
    console.log(url);
    response.setHeader('Content-Type',
        'text/html;charset=UTF-8');
    if(url=='/'){
        var menu = '<ul>';
        menu+='<li><a href="/niurou">牛肉大葱包子</a></li>';
        menu+='<li><a href="/pork">鲜肉包子</a></li>';
        menu+='<li><a href="/jiucaiegg">韭菜鸡蛋包子</a></li>';
        menu+='<li><a href="/snowflower">雪花啤酒</a></li>';
        menu+='</ul>';
        response.end(menu);//结束说话
    }else if(url=='/niurou'){
        response.end('给你一个牛肉大葱包子');//结束说话
    }else if(url=='/pork'){
        response.end('给你一个鲜肉包子');//结束说话
    }else if(url=='/jiucaiegg'){
        response.end('给你一个韭菜鸡蛋包子');//结束说话
    }else if(url=='/snowflower'){
        response.end('给你一个雪花啤酒');//结束说话
    }
}

//创建霍营包子店
var server = http.createServer(waiter);

//开门接待客人了
server.listen(8080,'0.0.0.0');


