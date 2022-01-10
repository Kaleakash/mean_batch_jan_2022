let fs = require("fs");
let employees = JSON.parse(fs.readFileSync("employee.json"));
employees.forEach(emp=> 
    console.log("id is "+emp.id+" name is "+emp.name+" age "+emp.age)
)