var http = require('http');

const server= http.createServer((req,res)=>{
    console.log(req);
    console.log("utsav gohel");
})

server.listen(3200);

