const mongoose = require("mongoose");

const Users = mongoose.model("users", {
  name: {
    type: String,
  },
});

module.exports = Users;
