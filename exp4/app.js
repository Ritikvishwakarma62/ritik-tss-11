const express =require("express");
const app = express();
app.use(express.static(__dirname+"/assets"));
app.get("/",function(req,res){
 res.sendFile(__dirname+"/home.html")
});
app.get("/about",function(req,res){
    res.sendFile(__dirname+"/about.html");
});

const port = process.env.PROT || 5000;
app.listen(port,function(){
  console.log("start virtual server",port);
});