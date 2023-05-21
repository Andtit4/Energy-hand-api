const nocRoute = require("./src/routes/noc.routes");
const supRoute = require("./src/routes/sup.routes");
const userRoute = require("./src/routes/user.routes");
const demandeRoute = require("./src/routes/demande.routes");
const traiterRoute = require("./src/routes/traiter.routes");
const siteRoute = require("./src/routes/site.routes");
// const webRoute = require("./src/web/routes/auth.routes");

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
app.use("/api/demande", demandeRoute);
app.use("/api/traiter", traiterRoute);
app.use("/api/site", siteRoute);
// app.use("/api/web", webRoute);

app.listen(3000, () => {
  console.log("[+] Listening on port 3000");
});
