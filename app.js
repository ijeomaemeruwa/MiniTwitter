
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require('dotenv').config();
// const fileUpload = require("express-fileupload");
const path = require("path");


//Middlewares
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false, limit: "10mb"}))
app.use(bodyParser.json({limit: "10mb"}))
app.use(cors())



//Connect MongoDB Task 1
const mongoURI = process.env.MONGO_URI
mongoose.connect(
  mongoURI,
  { 
    useUnifiedTopology: true,    
    useNewUrlParser: true, 
    useCreateIndex: true 
  })
  .then(() => {
    console.log("Successfully connected to MongoDB.");
  })
  .catch(err => {
    console.error("Connection error", err);
  });


//Listen to port
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`API is running on port ${port}`);
});