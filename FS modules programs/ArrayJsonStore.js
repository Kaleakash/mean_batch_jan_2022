let fs = require("fs");
let employees=[];
let emp1 = {id:100,name:"Raj",age:21};
let emp2 = {id:101,name:"Raju",age:22};
let emp3 = {id:102,name:"Ram",age:23};
employees.push(emp1);
employees.push(emp2);
employees.push(emp3);
fs.writeFileSync("employee.json",JSON.stringify(employees));
console.log("Employee information stored successfully")