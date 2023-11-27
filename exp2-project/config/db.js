require("mongoose").connect("mongodb://0.0.0.0:27017/practice").then(()=>{
    console.log("mongodb connected");
}).catch((err)=>{
    console.log("mongodb not connected",err);
})