var s = 'num=1&liang=ge';
var obj = change(s);
//var obj = {num:1,liang:'ge'};
console.dir(obj);

function change(url) {
    var reg = /([^?&=]+)=([^?&=]+)/g, obj = {};
    url.replace(reg, function () {
        obj[arguments[1]] = arguments[2];
    });
    return obj;
}