const express = require("express");
const router = express.Router();
const supController = require("../controller/sup.controller");

router.get("/auth", supController.auth);

module.exports = router;
