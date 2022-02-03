let express = require("express");
let mongoose = require("mongoose");
let empRouter = require("./router/emp.router");
let cors = require("cors");

let url = "mongodb://localhost:27017/meanbatch2";

let app = express();
mongoose.connect(url).then(res=>console.log("connected")).catch(e=>console.log(error));

app.use(cors());        // enable request body data. 

app.use("/api/emp",empRouter);


app.listen(9090,()=>console.log("Server is running"));

module.exports=app;     // in testing file we can import using require 

