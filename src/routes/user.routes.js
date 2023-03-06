const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller");

router.get("/auth", userController.auth);
router.get('', userController.getById);
router.post("/create", userController.create);
router.put("/update", userController.update);

module.exports = router;
