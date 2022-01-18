// load the mongoose module 
let mongoose = require("mongoose");
mongoose.pluralize(null);// to avoid creating collection in lower case with s as post fix 

// creating the schema reference.
let productSchema = mongoose.Schema({
    _id:Number,
    pname:String,
    price:String
})

// creating the refeference of model 
let productModel = mongoose.model("Product",productSchema);

// export model reference to other file
module.exports=productModel;

