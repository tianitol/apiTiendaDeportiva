const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clothesSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  color: {
    type: String,
    require: true,
  },
  size: {
    type: Number,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
});

const Clothes = mongoose.model("Clothes", clothesSchema);
module.exports = Clothes;
