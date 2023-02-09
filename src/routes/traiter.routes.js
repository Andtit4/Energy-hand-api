const express = require("express");
const router = express.Router();
const traiterController = require("../controller/traiter.controller");

router.post("/create", traiterController.create);
router.get("/all", traiterController.all);
router.get("/get", traiterController.byEmail);
router.get("/delete", traiterController.delete_by_id);
router.get("/total", traiterController.nb);


module.exports = router;
