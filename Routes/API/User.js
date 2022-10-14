
const router = require('express').Router()
const controller = require("../../Controllers/userController")





router.route("/test")
.get(controller.test)





  

module.exports= router;