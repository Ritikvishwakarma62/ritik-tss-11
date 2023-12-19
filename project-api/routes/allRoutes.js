const routes = require("express").Router();

routes.use("/api/city",(require("../controllers/cityController")));
routes.use("/api/signup",(require("../controllers/signupController")))
routes.use("/api/auth",(require("../controllers/authController")))

module.exports = routes