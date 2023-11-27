const routes = require("express").Router();
const students = require("../models/Student");

routes.get("/",(req,res)=>{
    res.render("pages/student");
})
routes.get("/list",async(req,res)=>{
    let result =await students.find();
    let pagedata = {result: result}
    res.render("pages/student-list",pagedata);
})
routes.get("/delete/:id",async (req,res)=>{
    let id = req.params.id;
    await students.deleteMany({_id : id});
    res.redirect("/student/list")
})
routes.get("/edit/:id",async(req,res)=>{
    let id = req.params.id;
    let result = await students.find({_id : id});
    let pagedata = {result : result[0]}
    res.render("pages/edit", pagedata)
})
routes.post("/update/:id",async(req,res)=>{
    let id = req.params.id;
    await students.updateMany({_id : id},req.body);
    res.redirect("/student/list")
})

routes.post("/add",async(req,res)=>{
    await students.create(req.body);
    res.redirect("/student/list");
   // console.log(req.body)
})

module.exports = routes;