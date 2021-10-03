const controller = require("../controllers/user.controller");
let router = require("express").Router();

module.exports = (app) => {
  //If the url path is equal to "/users" for GET request
  router.get("/", controller.find);

  router.post("/", controller.create);

  //Define the default path
  app.use("/users", router);
};
