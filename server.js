const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Role = require("./App/models/role.model");
require('./App/config/db');

const app = express();

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to harsh kagathara application." });
});

require("./App/routes/auth.routes")(app);
require("./App/routes/user.routes")(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
