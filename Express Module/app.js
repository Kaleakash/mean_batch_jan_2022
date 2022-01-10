// load the module 
let express = require("express");
let bodyParser = require("body-parser");
let alert= require("alert");

// create the reference of express module 
let app = express();

// middleware 
app.use(bodyParser.urlencoded({extended:true})); // this code is use enable request body data 

app.get("/",(req,res)=> {
    //res.sendFile("C:\\Users\\Vishal\\Desktop\\Phase 3 and Phase 4\\Phase 3 Programs\\Express Module\\index.html");
    res.sendFile(__dirname+"\\index.html");
})

app.get("/say",(req,res)=> {
    res.send("Welcome to Simple Express JS Application")
})

app.get("/AboutUs",(req,res)=> {
    res.send("About Us Page")
})

app.get("/ContactUs",(req,res)=> {
    res.send("<h2>Contact Us </h2>")
})

app.get("/loginGet",(req,res)=> {
        res.sendFile(__dirname+"\\loginGet.html");
        //res.send(__dirname);
})

app.get("/loginPost",(req,res)=> {
    res.sendFile(__dirname+"\\loginPost.html");
})

app.get("/checkUser",(req,res)=> {
    //let user = req.query.user;    // if method is get 
    //let pass = req.query.pass;
    let  user = req.query["user"];
    let pass = req.query["pass"];
    if(user=="Ravi" && pass=="123"){
            res.send("Successfully Login!")
    }else {
            res.send("Failure try once again")
    }
})

app.post("/checkUser",(req,res)=> {
    let login = req.body;           // if method post send through body part
    //console.log(login); 
   // res.send("Post method submitted");
//    if(login.user=="Ramesh" & login.pass=="123"){
//             res.send("Successfully login!")
//    }else {
//             res.send("Failure try once again")
//    }

    let result = loginDetais.find(l=>l.user==login.user && l.pass==login.pass);

    if(result==undefined){
        res.send("InValid username or password")
    }else {
        res.send("Successfully Login!")
    }
})

app.get("/signUp",(req,res)=> {
    res.sendFile(__dirname+"\\createAccount.html");
})

let loginDetais =[];

app.post("/createAccount",(req,res)=> {
    let login = req.body;
    loginDetais.push(login);
    alert("Account created successfully")
    res.sendFile(__dirname+"\\index.html");    
})

app.listen(9090,()=>console.log("Server running on port number 9090"));