const routes = require("express").Router();
const city = require("../modules/city")

routes.get("/", async (req,res)=>{
    let result = await city.find();
    res.send(result);
    
})

routes.get("/state", async(req,res)=>{
    let result = await city.distinct("state");
    res.send(result)
})

routes.get("/getcity/:a", async(req,res)=>{
    let a = req.params.a
    let result = await city.find({state :a});
    res.send(result);
})

module.exports = routes