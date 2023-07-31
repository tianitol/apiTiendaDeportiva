const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shoesSchema = new Schema(
    {
        name:{
            type:String,
            require: true
        },
        price: {
            type:Number,
            require:true
        },
        description:{
            type:String,    
        },
        image:{
            type:String,
            require:true
        }
    }
)
const Shoes = mongoose.model(Shoes, shoesSchema);
module.exports = Shoes;