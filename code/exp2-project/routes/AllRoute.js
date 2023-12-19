const routes = require("express").Router();


routes.use("/",require("../controllers/HomeController"));
routes.use("/user",require("../controllers/UserController"));
routes.use("/signup",require("../controllers/SignupController"));

module.exports = routes