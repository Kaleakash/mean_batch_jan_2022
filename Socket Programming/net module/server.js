let net = require("net");
let server = net.createServer();
let readline = require("readline");
let r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
// This code execute if any node or machine 
// send the request to this application using port 
// number and ip address..
server.on("connection",(socket)=> {
    console.log("Client send request...")

    // code to recieve data from client side - from client to server 
    socket.on("data",(msg)=> {
       // console.log(msg);
       console.log(msg.toString()); // converting buffer to string format. 
    })

    // code to send the data from server to client -- server to client 
    socket.write("Hello Client, Welcome to Socket programming...");

    // code to send the data to client again and again 
    r1.on("line",(input)=> {
        socket.write("From Server "+input);
    });
    
})

server.listen(8181,()=>console.log("Server running on port number 8181"));