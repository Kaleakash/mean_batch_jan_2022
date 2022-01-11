//import express from 'express';
//import postman from 'postman-request';
let express = require("express");
let postman  = require("postman-request");

let app = express();

postman("http://localhost:3000",(e,res,body)=> {
    console.log("This is simple postman request");
    console.log(e)
    console.log(res)
    console.log(body)
})

app.get("/",(req,res)=> {
    res.send("Welcome to Simple Express js application")
})

app.listen(3000,()=>console.log("Server running on port number 3000"))