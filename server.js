var http = require('http');


http.createServer(function(req, res) {

    res.writeHead(200, { 'Content-Type': 'text/html' });

    var url = req.url;

    if (url === '/about') {
        res.write(' Welcome to about us page');
        res.end();
    } else if (url === '/contact') {
        res.write(' Welcome to contact us page');
        res.end();
    } else {
        res.write('Good morning, Kenya');
        res.end();
    }
}).listen(4164, function() {

    console.log("server start at port 4164");
});