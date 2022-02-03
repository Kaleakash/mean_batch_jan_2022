let empModel = require("../model/emp.model");

let retrieveEmp = (req,res)=> {
    empModel.find({},(err,doc)=> {
        if(!err){
            res.json(doc);
        }else {
            res.send(err)
        }
    })
}

let storeEmployee = (req,res)=> {
        let emp = req.body;
        empModel.insertMany(emp,(err,doc)=> {
            if(err){
                res.send("Record stored")
            }else {
                res.send("Record didn't store");
            }
        })
}

module.exports={retrieveEmp,storeEmployee}
