// link to model folder and created the reference. 
let productModel = require("../model/product.model");

let storeProduct = (req,res)=> {

    let product = req.body;
    
    productModel.insertMany(product,(err,result)=> {
        if(!err){
            res.send("Record stored successfully")
        }else {
            console.log(err)
            res.send("Record didn't store");
        }
    });

}

let retrieveProduct = (req,res)=> {
    productModel.find({},(err,doc)=> {
        if(!err){
            res.json(doc);
        }
    })
}

let findProductById = (req,res)=> {
       let pid = req.params.pid;
       productModel.findById({_id:pid},(err,doc)=> {
           if(!err){
               //res.json(doc);
               if(doc!=null){
                    res.json(doc);
               }else {
                    res.json({"msg":"Record not present"});
               }
           }else {
               res.json({"msg":err});
           }
       }) 
}

let updateProductPrice = (req,res)=> {
        let product = req.body;
        productModel.updateOne({_id:product._id},{$set:{price:product.price}},(err,doc)=> {
            if(!err){
                    console.log(doc);
                    if(doc.modifiedCount>0){
                        res.json({"msg":"Record updated successfully"});
                    }else {
                        res.json({"msg":"Record not present"});
                    }
            }else {
                res.json({"msg":err});
            }
        })
}

let deleteProduct = (req,res)=> {
        let pid = req.params.pid;
        productModel.deleteOne({_id:pid},(err,doc)=> {
            if(!err){
                    //console.log(doc);
                    if(doc.deletedCount>0){
                        res.json({"msg":"Record deleteted successfully"});
                    }else {
                        res.json({"msg":"Record not present"});  
                    }
            }else {
                    res.json({"msg":err});
            }
        })
}
module.exports={storeProduct,retrieveProduct,findProductById,updateProductPrice,deleteProduct}