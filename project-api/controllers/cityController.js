const routes = require("express").Router();
const city = require("../modules/city")

routes.get("/", async (req,res)=>{
    let result = await city.find();
    res.send(result);
    
})

module.exports = routes