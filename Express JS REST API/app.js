// load the module 
let express = require("express");



// create the reference of the module 
let app = express();

// middlewarre 
app.use(express.json());    // this code is use to enalbe json data from request 

let emp = {id:100,name:"Ravi",age:21};
let employees = [
    {id:1,name:"Ravi",age:21},
    {id:2,name:"Ramesh",age:23},
    {id:3,name:"Rajesh",age:22},
    {id:4,name:"Raj",age:24}
]
// Get methods 
// http://localhost:9090/say 
app.get("/say",(req,res)=> {
    res.send("Welcome to simple Rest API ");
});

// http://localhost:9090/sayJson
app.get("/sayJson",(req,res)=> {
    res.json({"msg":"Welcome to simple rest API"})
})

//  http://localhost:9090/empInfo
app.get("/empInfo",(req,res)=> {
    res.json(emp);      // this method convet js object into json format
})
// http://localhost:9090/employees
app.get("/employees",(req,res)=> {
    res.json(employees);
})

// query param with single value 
// http://localhost:9090/singleQueryValue?name=Raj
app.get("/singleQueryValue",(req,res)=> {
    let name = req.query.name;
    res.send("Welcome user "+name);
})

// query param with multiple value 
// http://localhost:9090/multipleQueryValue?user=Raj&pass=123
// http://localhost:9090/multipleQueryValue?user=Raj&pass=1237
app.get("/multipleQueryValue",(req,res)=> {
    let user = req.query.user;
    let pass = req.query.pass;
    if(user=="Raj" && pass=="123"){
        res.json({"msg":"Successfully login!"})
    }else {
        res.json({"msg":"Failure try once again"})
    }
})

// path param with single value 
// http://localhost:9090/singlePath/Ravi
app.get("/singlePath/:user",(req,res)=> {
    let user = req.params.user;
    res.send("Welcome user "+user);
})

// path param with multiple value 
// http://localhost:9090/multiplePath/Ramesh/123
app.get("/multiplePath/:user/:pass",(req,res)=> {
    let user = req.params.user;
    let pass = req.params.pass;
    if(user=="Ramesh" && pass=="123"){
        res.json({"msg":"Successfully login"})
    }else {
        res.json({"msg":"Failure try once again"})
    }
})


// post methods             create resource 
// http://localhost:9090/storeData
app.post("/storeData",(req,res)=> {
    let employee = req.body;
    console.log(employee);
    res.send("Data stored successfully")
})

// put method               update resouce 
// http://localhost:9090/updateData
app.put("/updateData",(req,res)=> {
    let employee = req.body;
    console.log(employee);
    res.send("Record updated successfully")
})

// delete method            delete resource 
// http://localhost:9090/deleteData/100

app.delete("/deleteData/:id",(req,res)=> {
    let id = req.params.id;
    res.send("the record deleted with id as "+id);
})
// run the applicattion on server 
app.listen(9090,()=>console.log("server running on port number 9090"));