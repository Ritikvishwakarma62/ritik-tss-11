const routes = require("express").Router();
const user = require("../models/User");
const country = require("../models/Country");

routes.get("/",async(req,res)=>{
    let result = await country.find();
    let pagedata = {result}
    res.render("pages/user",pagedata);
})
routes.post("/save" ,async(req,res)=>{
    await user.create(req.body);
    res.redirect("/user/list");
 
})
routes.get("/list",async(req,res)=>{
    let result = await user.find();
    let pagedata = {result}
    res.render("pages/list",pagedata);
})
routes.get("/delete/:id",async(req,res)=>{
    let id = req.params.id;
    await user.deleteMany({_id : id});
    res.redirect("/user/list");
})
routes.get("/edit/:id" ,async(req,res)=>{
    let id = req.params.id;
    let result2 = await user.find({_id : id});
    let result = await country.find();
    let pagedata = {result, edit : result2[0]}
    res.render("pages/edit",pagedata)
})
routes.post("/update/:id",async (req,res)=>{
    let id = req.params.id ;
    await user.updateMany({_id : id},req.body);
    res.redirect("/user/list")
})

module.exports = routes