const mongoose = require("mongoose");
//mongoose.connect(connection URL)
mongoose.connect("mongodb://0.0.0.0:27017/project").then(()=>{
    console.log("mongoDB connection  successfull");
}).catch((err)=>{
    console.log("mongoDB not connected",err);
})

