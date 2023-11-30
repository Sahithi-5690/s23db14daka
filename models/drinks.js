const mongoose = require("mongoose")
const drinksSchema = mongoose.Schema({
    drinks_brand: {
        type: String,
        required:[true,"Drinks brand Name is required"],
        maxlength: "10",
        minlength: "3"
    },
    drinks_quantity: {
        type:String,
        required:true
    },
    drinks_cost: {
        type: Number,
        required:true,
        min: 1,
        max: 1000
    }
    })

    
module.exports = mongoose.model("Drinks",drinksSchema)