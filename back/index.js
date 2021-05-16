const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

//Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = 'mongodb+srv://mongo:changeme@cluster0.sgyvv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));


app.post("/", async (request, response) => {
    const food = new foodModel(request.body);
  
    try {
      await food.save();
      response.send(food);
    } catch (error) {
      response.status(500).send(error);
    }
  });