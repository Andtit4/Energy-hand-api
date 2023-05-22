const express = require("express");
const router = express.Router();
const siteController = require("../controller/site.controller");

router.get("/", siteController.getAll);
router.get("/nb", siteController.nb);
router.get("/state", siteController.getState);
router.get("/nb/state", siteController.nbState);


module.exports = router;
