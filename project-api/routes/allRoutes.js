const routes = require("express").Router();

routes.use("/api/city",(require("../controllers/cityController")));

module.exports = routes