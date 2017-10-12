require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const UsersController = require("./routes/UsersController");

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
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/client/build`));
//this has to be below bodyParser and static
app.use("/api/users", UsersController);

app.get("/", (request, response) => {
    response.sendFile(`${__dirname}/client/build/index.html`)
})


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Magic happening on port " + PORT);
})

