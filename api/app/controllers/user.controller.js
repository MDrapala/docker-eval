const Users = require("../models/user.model");

//GET all users from DB
exports.find = async (req, res) => {
  try {
    //Users = Schema (interface) from user.model.js
    const users = await Users.find({});

    //Send Response to client
    res.send(users);
  } catch (e) {
    //Send Response error message to client
    res.status(500).send();
  }
};

//POST new name user in DB
exports.create = async (req, res) => {
  //Users = Schema (interface) from user.model.js
  const user = new Users(req.body);
  try {
    await user.save();
    //Send Response to client
    res.status(200).send(user);
  } catch (e) {
    //Send Response error message to client
    res.status(400).send(e);
  }
};
