const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose")
const cors = require("cors");



//links
const mongoServer = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.obpnkif.mongodb.net`;
const PORT = process.env.PORT ; 
const url = `http://localhost:${PORT}`

// Middleware configuration
function middleWareConfig(app){
    app.use(cors());
    app.use(logger("dev"));
    app.use(express.json());
    app.use(express.urlencoded());

}

//connect to mongoose
async function mongoConnect(app){
    try{
        const response = await mongoose.connect(mongoServer)
        console.log("Connected to mongoose");
        app.listen(PORT, ()=>{console.log("Listening")})
    }
    catch(err){console.log("could not connect to mongoose"+err);}
  }
  
  module.exports = {middleWareConfig, mongoConnect, url}