let express = require("express");
let app = express();

app.get("/",(req,res)=> {
    res.send("Welcome to Simple Express JS with Docker")
});

app.get("/user/:name",(req,res)=> {
    let name = req.params.name;
    res.send("Welcome user "+name+" To express with docker");
})




app.listen(9090,()=>console.log("Server running on port number 9090"));