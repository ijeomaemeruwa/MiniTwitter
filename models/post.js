const mongoose = require("mongoose")


//you are to provide the necessary field type
const postSchema = mongoose.Schema({
    title:{
        
    },
    user_id: {
          
    },   
},{
    timestamps: true
})


module.exports = mongoose.model("Post", postSchema)