require("../config/db");
const mongoose = require("mongoose");


const UserSchema = mongoose.Schema({
    name : String,
    dia_code : String,
    code : String
},{collection : "country"})

module.exports = mongoose.model("country" ,UserSchema);