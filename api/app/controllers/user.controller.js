const Users = require("../models/user.model");

exports.find = async (req, res) => {
  try {
    const users = await Users.find({});
    res.send(users);
  } catch (e) {
    res.status(500).send();
  }
};

exports.create = async (req, res) => {
  const user = new Users(req.body);

  try {
    await user.save();
    res.status(201).send(user);
  } catch (e) {
    res.status(400).send(e);
  }
};
