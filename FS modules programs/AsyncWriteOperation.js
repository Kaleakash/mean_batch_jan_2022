let fs = require("fs");
let msg = "Welcome again";
fs.writeFile("demo.txt",msg,{flag:"a+"},(err)=>{
    if(!err){
        console.log("data stored in file successfully...")
    }
})
console.log("Hi")
console.log("Hello")
console.log("I am fine")