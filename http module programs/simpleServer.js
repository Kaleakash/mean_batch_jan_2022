let http = require("http");
let server = http.createServer((req,res)=> {
console.log("Client send the request");     // this ms display on server side console 
res.end("Welcome to simple Http module using node js");  // this msg display on client browser 
});


server.listen(9292,()=>console.log("Server running on port number 9292"))

