const router=require("express").Router();
const CatController=require('../../Controllers/CatalogController')

router.route("/All")
.get(CatController.findAll)
.post(CatController.create)

router.route("/:id")
.get(CatController.findById)
.put(CatController.update)
.delete(CatController.remove)

module.exports= router; 