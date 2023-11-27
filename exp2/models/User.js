require("../config/db");
const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name : String,
    email : String,
    contact : String,
    country : String,
    gender : String,
    address : String
});

let userModel = mongoose.model("user",UserSchema);
 module.exports = userModel


