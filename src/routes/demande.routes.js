const express = require("express");
const router = express.Router();
const demandeController = require("../controller/demande.controller");

router.post("/create", demandeController.create);
router.get("/all", demandeController.all);
router.put("/status", demandeController.updateStatus);
router.get("", demandeController.getById);
router.get("/get", demandeController.byEmail);
router.get("/delete", demandeController.delete_by_id);
router.get("/notified/open", demandeController.notified);
router.get("/notified/end", demandeController.notified_end);
router.get("/notified/not", demandeController.notified_not);
router.get("/total", demandeController.nb);
router.get("/site/hs", demandeController.getSiteHs);
router.get("/site/nb/hs", demandeController.getNbHs);

module.exports = router;
