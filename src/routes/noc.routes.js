const express = require("express");
const router = express.Router();
const noController = require("../controller/noc.controller");
const jwt = require("jsonwebtoken");

router.get("/auth", noController.auth);


module.exports = router;
