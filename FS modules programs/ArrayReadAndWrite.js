let fs = require("fs");
let employees = JSON.parse(fs.readFileSync("employee.json"));
let emp4 = {id:108,name:"Mahesh",age:28};
let result = employees.find(e=>e.id==emp4.id);
if(result==undefined){
employees.push(emp4);
fs.writeFileSync("employee.json",JSON.stringify(employees));
console.log("New Record stored successfully..");
}else {
    console.log("id must be unique")
}