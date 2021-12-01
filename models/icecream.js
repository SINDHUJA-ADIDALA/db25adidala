const mongoose = require("mongoose") 
const icecreamSchema = mongoose.Schema({ flavour: {type: String,maxlength: 11}, price: {type: Number,min:1}, toppings: String }) 
 
module.exports = mongoose.model("icecream", icecreamSchema) 