const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Shop Home");
});

router.get("/about", (req, res) => {
    res.send("About Shop");
});

router.get("/product-list", (req, res) => {
    res.send("Product Shop List");
});

module.exports = router;