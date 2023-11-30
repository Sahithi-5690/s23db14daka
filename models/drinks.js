const mongoose = require("mongoose")
const drinksSchema = mongoose.Schema({
    drinks_brand: {
        type: String,
        required:[true,"Drinks brand Name is required"]
    },
    drinks_quantity: {
        type:String,
        required:true
    },
    drinks_cost: {
        type: Number,
        required:true,
        min: 0,
        max:400
    }
    })

    
module.exports = mongoose.model("Drinks",drinksSchema)