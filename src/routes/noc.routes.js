const express = require("express");
const router = express.Router();
const noController = require("../controller/noc.controller");

router.get("/auth", noController.auth);

module.exports = router;
