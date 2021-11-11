const mongoose = require("mongoose") 
const icecreamSchema = mongoose.Schema({ flavour: String ,price: Number,toppings:String}) 
 
module.exports = mongoose.model("icecream", icecreamSchema) 