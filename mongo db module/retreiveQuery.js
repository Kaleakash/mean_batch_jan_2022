let mongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";
mongoClient.connect(url,(error,result)=> {
    if(!error){
        console.log("Db Connected...");
        let db = result.db("meanbatch2");
        
        //let cursor = db.collection("Employees").find({});
        //let cursor = db.collection("Employees").find({_id:2});
        let cursor = db.collection("Employees").find({salary:{$gt:30000}});
        cursor.forEach(e=> {
            //console.log(e)
            //console.log("Name is "+e.name);
            console.log("Name is "+e.name+" Salary is "+e.salary);
            result.close();
        })

    }else {
        console.log(error);
    }
})