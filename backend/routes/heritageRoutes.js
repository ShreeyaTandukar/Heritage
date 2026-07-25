const express = require("express");
const router = express.Router();

const {
    getAllSites,
    getSiteBySlug,
    createSite,
} = require("../controller/heritageController");

router.get("/", getAllSites);
router.post("/",createSite);
router.get("/:slug",getSiteBySlug);
module.exports = router;