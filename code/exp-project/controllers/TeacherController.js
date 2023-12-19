const express = require("express");
const routes = express.Router();
let teacherModal = require("../models/teacher");


routes.get("/",(req,res)=>{
    res.render("pages/teacher");
});

routes.post("/form", async(req,res)=>{
   // console.log(req.body);
  await  teacherModal.create(req.body); 
    res.redirect("/teacher/list");
}); 

routes.get("/list" , async (req,res)=>{
  let result = await teacherModal.find();
  let pagesdata = {result:result};
 res.render("pages/teacher-list" ,pagesdata);
});

routes.get("/delete/:a",async(req,res)=>{
  let x = req.params.a
  await teacherModal.deleteMany({_id : x});
  res.redirect("/teacher/list");
})

module.exports= routes