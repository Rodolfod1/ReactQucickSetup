const express = require ('express');



module.exports = {
    

    test: (req,res)=>{
        console.log("hit");
        res.json("routes working ok")
    }
       

    

}