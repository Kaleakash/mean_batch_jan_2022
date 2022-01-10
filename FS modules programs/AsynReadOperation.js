let fs = require("fs");
fs.readFile("demo.txt",(err,data)=> {
    if(!err){
        //console.log(data);
        console.log(data.toString()); // convert buffer to string format 
    }
})
console.log("Hi")
console.log("Hello");