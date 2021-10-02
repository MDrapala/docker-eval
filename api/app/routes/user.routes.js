const controller = require("../controllers/user.controller");
let router = require("express").Router();

module.exports = function (app) {
  //If the url path is equal to "/users" for GET request
  app.get("/", controller.find);

  //Define the default path
  app.use("/users", router);
};
