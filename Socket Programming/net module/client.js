let net = require("net");
let readline = require("readline");
let r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
let client = net.createConnection(8181,"localhost",()=> {
    // Client machine or node 
    console.log("Client start...")

    // send data to server machine - Client to server 
    client.write("Hello Server, I am a Client");
})

// code to receive data from server to client 
client.on("data",(msg)=> {
    console.log(msg.toString())
})
// send the code to server application , line pre-defined property it will ask 
// data again and again and send the information 
r1.on("line",(input)=> {
    // send to server 
    client.write("From Client :"+input);
})