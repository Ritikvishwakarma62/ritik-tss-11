let mongoose = require("mongoose");

require("../config/db");

let citySchema = mongoose.Schema({
    id : String,
    name : String,
    state : String
   // createAt : {tyoe:Date, default: new Date()}
},{ collection : "city"})

let city = mongoose.model("city", citySchema);

module.exports = city