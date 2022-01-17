// load the express module 
let express = require("express");

// create the reference of express 
let app  = express();

// We have to create the reference of express-ws with the help of 
// app reference using IIFE style 
let ws = require("express-ws")(app);
// http://localhost:9090
app.get("/",(req,res)=> {
    res.sendFile(__dirname+"\\index.html");
})

// this code is will execute if any request come through WebSocket Client Application
app.ws("/",(socket,req)=> {
        console.log("Web Socket Connection happen successfully");
            // set of q and answer 
        // code to receive the data from Client application 
        socket.on("message",(msg)=> {
            console.log(msg);
        })

        // Send the data from Server to Client 
        socket.send("Welcome Client, You connected WS Application successfully");
})


app.listen(9090,()=>console.log("Server running on port number 9090"));