const express = require("express");
const routes = express.Router();
let studentModal = require("../models/student");
const city = require("../models/city")


routes.get("/", async(req, res) => {
  let result = await city.find();
  let data = {city : result}
  res.render("pages/student",data);
});

routes.post("/form", async (req, res) => {
  await studentModal.create(req.body);
  res.redirect("/student/list")
});

routes.get("/list", async (req, res) => {
  let result = await studentModal.find();
  let pagesdata = { result: result };
  res.render("pages/student-list", pagesdata);
});

routes.get("/delete/:a" ,async(req,res)=>{
  let x = req.params.a;
  await studentModal.deleteMany({_id : x});
  res.redirect("/student/list") 
} )

routes.get("/edit/:id", async (req,res)=>{
  let id = req.params.id;
  let result = await  studentModal.find({ _id : id})
  let data = {edit : result[0]}
  res.render("pages/student-edit",data)
})

routes.post("/update/:id", async(req, res)=>{
  let id = req.params.id;
  await studentModal.updateMany({_id : id},req.body) 
  res.redirect("/student/list")
 
})

module.exports = routes