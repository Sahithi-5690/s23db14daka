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
    drinkss_cost: {
        type: String,
        required:true
    }
    })

    
module.exports = mongoose.model("Drinks",drinksSchema)