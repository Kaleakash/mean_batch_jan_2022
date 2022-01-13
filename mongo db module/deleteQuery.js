let mongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";
mongoClient.connect(url,(error,result)=> {
    if(!error){
        console.log("Db Connected...");
        let db = result.db("meanbatch2");
        db.collection("Employees").deleteOne({_id:1},(e,res)=> {
            if(!e){
                //console.log(res)
                    if(res.deletedCount>0){
                        console.log("Record deleted")
                    }else {
                        console.log("Record not present")
                    }
            }else {
                console.log(e);
            }
            result.close();
        })

    }else {
        console.log(error);
    }
})