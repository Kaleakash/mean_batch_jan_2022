let fs = require("fs");
let data = fs.readFileSync("demo2.txt");
//console.log(data);
console.log(data.toString());   // convert buffer to string format 
console.log("Hi")
console.log("Hello")