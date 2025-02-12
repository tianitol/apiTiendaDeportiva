const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    user:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:[
            true,
            ""
        ],
        unique:true
    }
})
const User = mongoose.model("User", userSchema);
module.exports = User;