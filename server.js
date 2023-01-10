const nocRoute = require("./src/routes/noc.routes");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/api/noc", nocRoute);
app.listen(3000, () => {
  console.log("[+] Listening on port 3000");
});
