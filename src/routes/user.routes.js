const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller");

router.get("/auth", userController.auth);

module.exports = router;
