let emp = {id:102,name:"Mahesh",age:24};
let fs = require("fs");
fs.writeFile("emp.json",JSON.stringify(emp),(err)=> {
    if(!err){
        console.log("Employee data stored successfully..")
    }
})