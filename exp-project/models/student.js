let mongoose = require("mongoose");

require("../config/db");

let studentSchema = mongoose.Schema({
    name: String,
    fee: Number,
    contact: Number,
    class: String,
    gender: String,
    address: String,
    city:String,
   // createAt : {tyoe:Date, default: new Date()}
})

let student = mongoose.model("student", studentSchema);

module.exports = student