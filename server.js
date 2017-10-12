require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true}); 
const connection = mongoose.connection;

connection.on('connected', () => {
  console.log('Mongoose Connected Successfully');    
}); 

// If the connection throws an error
connection.on('error', (err) => {
  console.log('Mongoose default connection error: ' + err);
}); 

//inject middleware
app.use(bodyParser.json())

app.get("/", (request, response) => {
    response.send("hello world")
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Magic happening on port " + PORT);
})
