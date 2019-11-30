var http = require('http');

const server= http.createServer((req,res)=>{
    console.log(req);
})
console.log("hello");
// server.listen(3200);