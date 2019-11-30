var http = require('http');

const server= http.createServer((req,res)=>{
    console.log("hemangini gohel");
    console.log(req);
})

server.listen(3200);


