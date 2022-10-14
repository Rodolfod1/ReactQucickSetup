const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const path = require ('path');
const apiRouter = require('./Routes');
const PORT = (process.env.PORT || 3001);


app.use(cookieParser());
app.use(express.json());
app.use(apiRouter);



mongoose.connect(process.env.MONGODB_URI ||"mongodb://localhost/SolaDB",{
    useNewUrlParser: true,
    useUnifiedTopology: true
}, ()=>{console.log("connected to your MongoDB");
}, e => console.error(e)
);  

// middleware 
if(process.env.NODE_ENV === 'production'){
  // this calls the build folder to our server 
  app.use(express.static('client/build'));
    // this will server the index.html from the front end 
  app.get('/*',(req,res)=>{
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}


app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});