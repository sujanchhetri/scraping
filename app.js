var express = require('express');
var path = require('path');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var app = express();
var port = 8000;
/*e1
var url='https://sujjjan.ml';
request(url,function(err,resp,body){
    if(err){
        console.log(err);
    }
    else{
        console.log(body);
    }
})

app.listen(port);
console.log('server is listening on:'+port);
*/

var destination = fs.createWriteStream('./downloads/myweb.html');
var url='https://sujjjan.ml';
request(url)
.pipe(destination)
.on('finish',function(){
    console.log('Done with the download');
})
.on('error',function(){
    console.log(err);
});


app.listen(port);
console.log('server is listening on:'+port);
