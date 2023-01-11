const nocRoute = require("./src/routes/noc.routes");
const supRoute = require("./src/routes/sup.routes");
const userRoute = require("./src/routes/user.routes");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/api/noc", nocRoute);
app.use("/api/sup", supRoute);
app.use("/api/user", userRoute);
app.listen(3000, () => {
  console.log("[+] Listening on port 3000");
});
