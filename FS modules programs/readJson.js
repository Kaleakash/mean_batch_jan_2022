let fs = require("fs");
fs.readFile("emp.json",(err,data)=> {
    if(!err){
        //console.log(data); buffer format 
        console.log(data.toString())// string format 
        // let emp = data.toString();
        // console.log("id is "+emp.id)
        let emp = JSON.parse(data);
        console.log("id is "+emp.id);
        console.log("name is "+emp.name);
        console.log("age is "+emp.age);

        
    }
})