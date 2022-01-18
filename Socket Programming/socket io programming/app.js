// load the express module 
let express = require("express");

// create the reference of express 
let app = express();

// creating reference of http module with the 
// help of express module reference using createServer function 
let http = require("http").createServer(app);

//load the socket.io module and providing http reference 
// using IIFE Style socket.io link with http protocol. 
let io = require("socket.io")(http);

// open the first page for client application 
app.get("/",(req,res)=> {
    res.sendFile(__dirname+"\\index.html");
})

//to open main.html page
app.get("/open",(req,res)=> {
    res.sendFile(__dirname+"\\main.html");
})

// This code will execute if any client send the request using library 
io.on("connection",(socket)=> {
    console.log("Client connected this application");
    // if any client browser close the application 
    socket.on("disconnect",()=> {
        console.log("Client disconnected.") 
    })

    // receive the data from client app 
    socket.on("obj",(msg)=> {
        console.log("From Client "+msg);
        // send the message to client application 
        socket.emit("obj1","Welcome"+msg+" to Socket Io Application");
    });
    
    
})


// run the application using http reference. 
http.listen(9090,()=>console.log("Server running on port number 9090"));
