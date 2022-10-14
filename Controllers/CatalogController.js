const express = require ('express');
const db= require('../Models/Models');


// creating calls using mongoose on models 

module.exports = {

  
   findAll:(req,res)=>{
   
      db.Catalog
       .find(req.query)
       .then(answer=>res.json(answer))
       .catch(err => res.status(422).json(err));
   },

   


  

   findById:(req,res)=>{
      db.Catalog
    .findById(req.params.id)
    .then(answer=>res.json(answer))
    .catch(err => res.status(422).json(err));
   },

   create:(req,res)=>{
      db.Catalog
    .create(req.body)
    .then(answer=>res.json(answer))
    .catch(err => res.status(422).json(err));
   },

    // remember to parse the objectID from mongo DB
   update:(req,res)=>{
      db.Catalog
   .findOneAndUpdate({ id: req.params.id }, req.body)
   .then(answer=>res.json(answer))
    .catch(err => res.status(422).json(err));
   },

   remove:(req,res)=>{
      db.Catalog
    .findById(req.params.id)
    .then(answer=>answer.remove())
    .then(answer=>res.json(answer))
    .catch(err => res.status(422).json(err));
   },


}