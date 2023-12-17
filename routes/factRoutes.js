const express = require("express");
const router = express.Router();
const Factory = require("../models/factory.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {url} = require("../config.js");
const checkToken = require("../middleware/checkToken");

// app.use("/factory", factoryRoutes)


router.get("/all", checkToken, async (req, res)=>{
    const userId = req.headers.userid;
    try{
        const response = await Factory.find({factoryUser:userId})
        res.status(201).json(response)
    }
    catch(err){
        res.status(400).json({msg: "Could not get factories."})

    }
})

//get a factory
router.get("/fact/:id", checkToken, async (req, res)=>{
    
    try{
        const response = await Factory.findById(req.params.id)
        console.log(response);
        res.status(201).json(response)
    }
    catch(err){
        res.status(400).json({msg: "Could not get factories."})

    }
})

//adds a factory
router.post("/all", async (req, res)=>{

    try{
        const response = await Factory.create(req.body)
        res.status(200).json(response)

    }
    catch(err){
        res.status(401).json({msg: "Could not add factory. Server error."})
    }
})
// adds/edits an entry
router.put("/:id", async (req, res)=>{
    try{
        const response = await Factory.findByIdAndUpdate(req.params.id, req.body)
        console.log(response);
        res.status(200).json(response)

    }
    catch(err){
        res.status(401).json({msg: "Could not add entry. Server error."})

    }
})


module.exports = router
