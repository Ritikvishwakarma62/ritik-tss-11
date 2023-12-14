const routes = require("express").Router();
const user = require("../modules/users");

routes.post("/", async(req,res)=>{
    await user.create(req.body);
    res.send({success : true});
})

module.exports = routes;