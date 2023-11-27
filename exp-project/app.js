const express = require("express");
const app = express();
const routes = require("./routes/allRoutes");

app.use(express.static(__dirname+"/assets"));
app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(routes);


const port = process.env.PORT||4000;
app.listen(port,()=>{
    console.log("server start with port ",port);
});