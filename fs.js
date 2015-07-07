var fs = require('fs');

/*fs.readFile('index.html','utf8',function(err,data){
    console.log(data);
});*/
var content = fs.readFileSync('index.html','utf8');
console.log(content);
console.log('over');
console.log('over');