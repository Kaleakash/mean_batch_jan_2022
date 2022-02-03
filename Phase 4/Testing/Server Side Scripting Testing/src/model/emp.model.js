let mongoose = require("mongoose")
 mongoose.pluralize(null);
 let empSchema = mongoose.Schema({
     _id:Number,
     name:String,
     age:Number,
     city:String
 });

 let empModel = mongoose.model("Emp",empSchema);

 module.exports=empModel;
 