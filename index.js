const express= require('express');
const cookieParser = require('cookie-parser');
const app= express();
const port= 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose'); // for database


app.use(express.urlencoded());

app.use(cookieParser());


// const mongoose= require('mongoose');

// mongoose.connect('mongodb://localhost:27017/');

// const db=mongoose.connection;



app.use(express.static('./assets'));
app.use(expressLayouts);

app.set('layout extractStyles', true);
app.set('layout extractScripts', true);



 

//use express router

app.use('/',require('./routes'));


//setup view engine
app.set('view engine','ejs'); //app.use was previously used
app.set('views', './views');



app.listen(port, function(err)
{
 if(err){
    console.log(`Error in running a server: ${err}`);

 }
  console.log(`Server is running on port: ${port}`);   
  

});