// loading the module and creating reference of MongoClient 
let mongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";
mongoClient.connect(url,(err,result)=> {
    if(!err){
        console.log("It connected database successfully")
        // write the code to do operation     
        let db = result.db("meanbatch2");
let emp = {_id:13,name:"Vikash",salary:35000,deptId:100,city:"Bangalore"}
       
    db.collection("Employees").insertOne(emp,(e,res)=> {
            if(!e){
                console.log("Record inserted successfully")
            }else {
                console.log(e)
            }
            result.close();
        })

    }else {
        console.log(err)
    }
})