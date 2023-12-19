const express = require("express");
const routes = express.Router();

routes.use("/",require("../controllers/homeController"));    
routes.use("/student",require("../controllers/StudentController"));
routes.use("/teacher",require("../controllers/TeacherController"));

module.exports = routes