//importar Modulos core o modulos locales
var http = require("http");
var url = require('url');
var querystring = require('querystring');

//importacion local global
//var log = require('./modules/log');
var consts = require('./utils/consts');
var fire = require('../libs/firebase');
var{countries} = require('countries-list');
//importacion local parcial
var{info,error} = require('./modules/log');

var server = http.createServer(function (request, response) {
    var parsed = url.parse(request.url);
    info(parsed);
    
    var pathname = parsed.pathname;
    var query = querystring.parse(parsed.query);
    info(query);
    
    if (pathname === "/") {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write("<html><body><h1>HOME PAGE</h1><p>Hello!</p></body></html>")
        response.end();
    } else if (pathname === "/exit") {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write("<html><body><h1>EXIT PAGE</h1><p>Bye!</p></body></html>")
        response.end();
    } else if (pathname === "/info") {
        var result = info(pathname);
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write(result)
        response.end();
    } else if (pathname === "/error") {
        var result = error(pathname);
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write(result)
        response.end();
    } else if (pathname === "/country") {
        var result = info(pathname);
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.write(JSON.stringify(countries[query.code]));
        response.end();
    }else {
        response.writeHead(404, { 'Content-Type': 'text/html' });
        response.write("<html><body><h1>NOT FOUND!!!</h1><p>No resource found</p></body></html>")
        response.end();
    }
});

server.listen(4000);

console.log("runnig on port " + 4000);