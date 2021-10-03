const controller = require("../controllers/user.controller");
let router = require("express").Router();

module.exports = (app) => {
  //If the url path is equal to "/users" for GET request (Get all users name)
  router.get("/", controller.find);
  //If the url path is equal to "/users" for POST request (Add new user name)
  router.post("/", controller.create);

  //Define the default path
  app.use("/users", router);
};
