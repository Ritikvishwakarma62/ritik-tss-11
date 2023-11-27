const mongoose = require("mongoose");

require("../config/db");
let teacherSchema = mongoose.Schema({
    name:String,
    salary:Number,
    contact:String,
    education:String,
    address:String
});

let teacherModel = mongoose.model("teacher",teacherSchema);
module.exports = teacherModel