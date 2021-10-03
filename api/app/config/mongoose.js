require("dotenv").config({ path: "../.env" });
const mongoose = require("mongoose");

mongoose.connect(process.env.ME_CONFIG_MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
