// loading the module and creating reference of MongoClient 
let mongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";
mongoClient.connect(url,(err,result)=> {
    if(!err){
    console.log("It connected database successfully")
        // write the code to do operation     
    let db = result.db("meanbatch2");

    // db.collection("Employees").updateMany({city:"Bangalore"},{$set:{salary:35000}},(e,res)=> {
    //      if(!e){
    //          console.log(res);
    //      }else {
    //          console.log(e)
    //      }
    //      result.close();
    //  })   

    db.collection("Employees").updateOne({city:"Bangalore"},{$set:{salary:40000}},(e,res)=> {
         if(!e){
             console.log(res);
         }else {
             console.log(e)
         }
         result.close();
     })

    }else {
        console.log(err)
    }
})