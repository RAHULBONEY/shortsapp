const express = require("express");
const router = express.Router();
const audioController = require("../controllers/audioController");
router.post("/generate", audioController.generateNarrate);
module.exports = router;
