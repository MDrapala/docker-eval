require("dotenv").config({ path: "../.env" });
const mongoose = require("mongoose");

//Use link for connect to MongoDB database
mongoose.connect(process.env.ME_CONFIG_MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
