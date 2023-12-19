require("../config/db");
const mongoose = require("mongoose");

const signSchema = mongoose.Schema ({
    name : String,
    email : String,
    contact : String, 
    country : String,
    gender : String
})

module.exports = mongoose.model("student",signSchema)