require("dotenv").config({ path: "./.env" });
const express = require("express");
const cors = require("cors");
require("./app/config/mongoose");

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb", extended: true }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

const PORT = process.env.API_PORT;

//Route default
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Evaluation Docker." });
});

//Routes from users
require("./app/routes/user.routes")(app);

//If api is running
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
