const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/practice").then(()=>{
    console.log("mongodb conneted");
}).catch((err)=>{
    console.log("mongodb not conneted")
});