const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    userName:{
        
    },
    email: {
          
    },
    password: {
        
    },
    
},{
    timestamps: true
})

//added stuff here
module.exports = mongoose.model("User", userSchema)