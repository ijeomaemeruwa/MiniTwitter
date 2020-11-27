const express = require("express")
const router = express.Router()
const bcrypt = require('bcrypt');
const saltRounds = 10;
const { response } = require("express");
const { Validator } = require('node-input-validator')
const { v4: uuidv4 } = require('uuid');
const jwt = require("jsonwebtoken")
const webtoken = require("../middleware/auth")


//Error formatter. You can plug this function to help you format Validation error messages.
// It is not necessary for now
const VerrorsMessageFormatter = (Verrors) => {       //formats verror message
    let errors = Object.entries(Verrors)
    errorsFormatted = errors.map(h => h[1].message)
    return errorsFormatted
}

//sample end point
router.get("/sample/test", async(req, res)=>{
    try {
        res.send("i am a test endpoint")
    } catch (error) {
        console.log(error);
        res.send(error)
    }
})

//router.post("/", webtoken.verifyToken, async (req, res, next)=>{}). This is how you add a middleware. In this case the middleware is 
//called  webtoken.VerifyToken. 

//start your code from here
module.exports = router;