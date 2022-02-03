let express = require("express");
let empController = require("../controller/emp.controller");
let router = express.Router();

router.get("/allEmployee",empController.retrieveEmp);
router.post("/storeEmployee",empController.storeEmployee);

module.exports=router;