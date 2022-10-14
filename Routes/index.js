// const path = require("path");
const router= require("express").Router();
const userRouter= require("./API/User");
const ItemRouter=require("./API/Items")


router.use("/user",userRouter);

router.use("/Items",ItemRouter);


module.exports =router;