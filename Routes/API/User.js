
const router = require('express').Router()
const controller = require("../../Controllers/userController")





router.route("/test")
.get(controller.testing)





  

module.exports= router;