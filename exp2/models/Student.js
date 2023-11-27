require("../config/db");
const mongoose = require("mongoose");

let studentSchema = mongoose.Schema({
    name : String,
    fee : Number,
    contact : String,
    class : String,
    gender : String,
    address : String
});

module.exports = mongoose.model("student",studentSchema);