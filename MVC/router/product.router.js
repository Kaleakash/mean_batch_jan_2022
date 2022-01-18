// reference of controller 
let productController = require("../controller/product.controller");
let express = require("express");
let router = express.Router();      // it will give the router reference. 


router.post("/storeProduct",productController.storeProduct);
router.get("/retrieveProduct",productController.retrieveProduct);
router.get("/findById/:pid",productController.findProductById);
router.put("/updateProduct",productController.updateProductPrice);
router.delete("/deleteProduct/:pid",productController.deleteProduct);

module.exports=router;