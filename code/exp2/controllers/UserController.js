const routes = require("express").Router();
const users = require("../models/User");
const country = require("../models/Country");

routes.get("/", async (req, res) => {
    let result = await country.find();
    let pagedata = {result};
    res.render("pages/user",pagedata);
})
routes.post("/add",async(req,res)=>{
    await users.create(req.body);
    console.log(req.body)
    res.redirect("/user/list")
    console.log(req.body)
})
routes.get("/list",async(req,res)=>{
    let result = await users.find();
    let pagedata = {result}
    res.render("pages/user-list",pagedata)
})
routes.get("/delete/:id",async(req,res)=>{
    let id = req.params.id;
    await users.deleteMany({_id : id});
    res.redirect("/user/list")
})

module.exports = routes;