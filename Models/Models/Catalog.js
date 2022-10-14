// this model DB will store the information for the login and profile 
const mongoose = require('mongoose');

// const Schema = mongoose.Schema;

const CatalogSchema = new mongoose.Schema({
    Category: {
        type: String,
        required: true,
       
    },
    Brand: {
        type: String,
        required: true
    },
   
    Name: {
        type: String,
        required: true
    },
    DataSheet: {
        type: String,
        required: true
    },
    Picture: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    }
    
});



const Catalog = mongoose.model('Catalog',CatalogSchema);

module.exports = Catalog;