//Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = 'mongodb+srv://mongo:changeme@cluster0.sgyvv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));