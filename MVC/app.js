// load all modules 
let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
let productRouter = require("./router/product.router");

let url = "mongodb://localhost:27017/meanbatch2";

// create the reference of express module 
let app = express();

// add middleware 
app.use(express.json());        // enable json data from request body 
app.use(cors());                // enable cors origin while calling through angualr 

// datababase connectivity 
mongoose.connect(url).
then(res=>console.log("Connected successfully")).
catch(err=>console.log(err));

//check main path 
//it check the main path 
// http://localhost:9090/api/product/*

app.use("/api/product",productRouter);
//app.use("/api/customer",customerRouter);

app.listen(9090,()=>console.log("Server running on port number 9090"));