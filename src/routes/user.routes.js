const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller");

router.get("/auth", userController.auth);
router.post("/create", userController.create);

module.exports = router;
