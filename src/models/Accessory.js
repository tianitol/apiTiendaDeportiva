const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accessorySchema = new Schema(
    {
        name: {
            type: String,
            require: true
        },
        category: {
            type: String,
            require: true
        },
        price: {
            type: Number,
            require: true
        },
        description: {
            type: String,
        },
        image: {
            type: String,
        }
    }
)
const AccessoryModel = mongoose.model('Accessory', accessorySchema);

module.exports = AccessoryModel
