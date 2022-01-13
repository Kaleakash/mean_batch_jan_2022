// loading the module and creating reference of MongoClient 
let mongoClient = require("mongodb").MongoClient;

let url = "mongodb://localhost:27017";


mongoClient.connect(url,(err,result)=> {
    if(!err){
        console.log("It connected database successfully")
        // write the code to do operation     

        result.close();
    }else {
        console.log(err)
    }
})