// const mongoose= require ('mongoose');
// // const url = "mongodb://localhost:27017";

// // const db= new MongoClient(url);
// mongoose.connect('mongodb://localhost/newProject');

// const db=mongoose.connection;



// db.on('error',console.error.bind(console, "Error connecting to mongo db"));

// db.once('open', function(){
//        console.log('Connected to Database:: Mongodb');
// });

// module.exports = db;


const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;

//asdf