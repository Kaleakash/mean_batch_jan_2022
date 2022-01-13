 let obj = require("mongoose");
 let url = "mongodb://localhost:27017/meanbatch2";
obj.pluralize(null);            // to avoid creating collection name in lower case with s 
// conntect the database 
 obj.connect(url).
 then(res=>console.log("db connected successfully")).
 catch(e=>console.log(e))

 // got the connection reference. 
 let db = obj.connection;

 db.once("open",()=> {
     console.log("Ready to do the operation")     
     // Defined Schema 
     let productSchema  = obj.Schema({
         _id:Number,
         name:String,
         price:Number
     });
     // Define the model 
     // 1st parameter is collection name
     // 2nd parameter is schema reference. 
    let productModel = obj.model("Product",productSchema);
    // creating the product instance using product model 

    // Insert Query 
    // let p1 = new productModel({_id:3,name:"Laptop",price:85000});   
    // productModel.insertMany(p1,(err,res)=> {
    //      if(!err){
    //          console.log("Record inserted successfully")
    //      }else {
    //          console.log(err)
    //      }
    //      obj.disconnect();
    //  })

    // update Query 

    // productModel.updateOne({_id:1},{$set:{price:127000}},(err,res)=> {
    //         if(!err){
    //            // console.log(res);
    //            if(res.modifiedCount>0){
    //                 console.log("REcord updated succesully")
    //            }else {
    //                 console.log("Record didn't update")
    //            }
    //         }else {
    //             console.log(err);
    //         }
    //         obj.disconnect();
    // })

     // deleteQuery 

    //  productModel.deleteOne({_id:2},(err,res)=> {
    //         if(!err){
    //                 if(res.deletedCount>0){
    //                     console.log("REcord deleted successfully")
    //                 }else {
    //                         console.log("REcord not present")
    //                 }
    //         }else {
    //             console.log(err)
    //         }
    //         obj.disconnect();
    //  })

    // Retreive query 

    productModel.find({},(err,doc)=> {
        if(!err){
            doc.forEach(p=> {
                console.log("id is "+p._id+" Product name is "+p.name+" Price is "+p.price)
                obj.disconnect();
            })         
        } else {
            console.log(err);
        }  
    })
 })