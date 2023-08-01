const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shoeSchema = new Schema(
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
        }
    }
)
const Shoe = mongoose.model('Shoe', shoeSchema);
module.exports = Shoe;