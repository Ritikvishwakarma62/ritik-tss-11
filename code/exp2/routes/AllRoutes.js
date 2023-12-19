const routes = require("express").Router();

routes.use("/",require("../controllers/HomeController"));
routes.use("/student",require("../controllers/StudentController"));
routes.use("/user",require("../controllers/UserController"));



module.exports = routes;