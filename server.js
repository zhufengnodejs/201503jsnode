var http = require('http');//包子店模板
function change(url) {
    var reg = /([^?&=]+)=([^?&=]+)/g, obj = {};
    url.replace(reg, function () {
        obj[arguments[1]] = arguments[2];
    });
    return obj;
}

// request 服务员的耳朵 response 服务员的嘴巴
var waiter = function(request,response){
    var url = request.url;
    var pathname=null;
    var queryObj=null;
    if(url.indexOf('?')>0){
        var urls = url.split('?');
        pathname = urls[0];
        var query =  urls[1];//num=1&liang=ge
         queryObj = change(query);
    }else{
        pathname = url;
    }

    var method = request.method;
    var host = request.headers['host'];
    console.log(url);
    response.setHeader('Content-Type',
        'text/html;charset=UTF-8');
    if(pathname=='/'){
        var menu = '<ul>';
        menu+='<li><a href="/niurou?num=6&liang=ge">牛肉大葱包子</a></li>';
        menu+='<li><a href="/pork?num=4&liang=ge">鲜肉包子</a></li>';
        menu+='<li><a href="/jiucaiegg?num=2&liang=ge">韭菜鸡蛋包子</a></li>';
        menu+='<li><a href="/snowflower?num=2&liang=bottle">雪花啤酒</a></li>';
        menu+='</ul>';
        response.end(menu);//结束说话
    }else if(pathname=='/niurou'){
        response.end('给你'+queryObj['num']+queryObj['liang']+'牛肉大葱包子');//结束说话
    }else if(pathname=='/niurou'){
        response.end('给你'+queryObj['num']+queryObj['liang']+'牛肉大葱包子');//结束说话
    }else if(pathname=='/pork'){
        response.end('给你'+queryObj['num']+queryObj['liang']+'鲜肉包子');//结束说话
    }else if(pathname=='/jiucaiegg'){
        response.end('给你'+queryObj['num']+queryObj['liang']+'韭菜鸡蛋包子');//结束说话
    }else if(pathname=='/snowflower'){
        response.end('给你'+queryObj['num']+queryObj['liang']+'雪花啤酒');//结束说话
    }
}

//创建霍营包子店
var server = http.createServer(waiter);

//开门接待客人了
server.listen(8080,'0.0.0.0');


