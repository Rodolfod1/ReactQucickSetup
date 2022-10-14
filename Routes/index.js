// const path = require("path");
const router= require("express").Router();

const userRouter= require("./API/User");


router.use("/user",userRouter);



module.exports =router;