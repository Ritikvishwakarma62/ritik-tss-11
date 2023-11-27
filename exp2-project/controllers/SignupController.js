const routes = require("express").Router();
const country = require("../models/Country");
const signup = require("../models/Signup");


routes.get("/", async(req,res)=>{
    let result = await country.find();
    let pagedata = {result} 
    res.render("pages/signup",pagedata);
})
routes.post("/add" ,async(req,res)=>{
    await signup.create(req.body);
    res.redirect("/signup/signup-list");
})
routes.get("/signup-list" ,async(req,res)=>{
   let result= await signup.find();
   let pagedata = {result}
    res.render("pages/signup-list",pagedata)
})
routes.get("/delete/:id",async(req,res)=>{
    let id = req.params.id;
    await signup.deleteMany({_id : id});
    res.redirect("/signup/signup-list");

})
routes.get("/edit/:id",async(req,res)=>{
   let id = req.params.id;
   let result2 = await signup.find({_id : id});
   let result =  await country.find();
   let pagedata = {result, signup : result2[0]}
    res.render("pages/signupEdit",pagedata  )
})
routes.post("/update/:id", async(req,res)=>{
    let id = req.params.id;
    await signup.updateMany({_id : id},req.body);
    res.redirect("/signup/signup-list");

})
module.exports = routes