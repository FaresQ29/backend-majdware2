const express = require("express");
const router = express.Router();
const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {url} = require("../config.js");
const checkToken = require("../middleware/checkToken");


router.put("/add/:id", async (req, res)=>{
    const id = req.params.id
    console.log(req.body);
    try{
        const response = await User.findByIdAndUpdate(id, req.body)
        res.status(200).json(response)

    }
    catch(err){
        res.status(401).json({msg: "Could not add factory. Server error."})
    }
})

module.exports = router