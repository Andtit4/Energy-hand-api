const express = require("express");
const router = express.Router();
const noController = require("../controller/noc.controller");
const jwt = require("jsonwebtoken");

router.post("/auth", noController.auth);

module.exports = router;
