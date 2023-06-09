const http = require('http');

const feature = require('./feature');

console.log(feature.like);
console.log(feature.gfName);
const server= http.createServer((req, res) => {
    if(req.url === '/'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`<h1>Hello World!  </h1> ${feature.gfName} ${feature.like}`);

    }
    else if(req.url === '/about'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>This is about page</h1>');
    }
    else if(req.url === '/contact'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>This is contact page</h1>');
    }
    else{
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.end('<h1>404 not found</h1>');
    }
})

server.listen(5000,()=>{
    console.log('Server running at http://localhost:5000');
})