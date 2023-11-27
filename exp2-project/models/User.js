require("../config/db");
const mongoose = require("mongoose");


const UserSchema = mongoose.Schema({
    name : String,
    email : String,
    country : String,
    contact : String,
    gender : String
})

module.exports = mongoose.model("user" ,UserSchema);