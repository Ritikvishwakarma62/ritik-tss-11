const express =require("express");
const app = express();
app.use(express.static(__dirname+"/assets"));
app.get("/",function(req,res){
    res.sendFile(__dirname+"/home.html");
});
app.get("/about",function(req,res){
    res.sendFile(__dirname+"/about.html");
});
app.get("/contact",function(req,res){
    res.sendFile(__dirname+"/contact.html");
});
const port = process.env.PORT || 2000;
app.listen(2000,function(){
    console.log('server is runing with',port);
});
