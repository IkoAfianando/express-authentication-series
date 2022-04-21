const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log(req.oidc.isAuthenticated());
  res.render("index", {
    title: "Express Demo",
    isAuthenticated: req.oidc.isAuthenticated(),
  });
});

module.exports = router;
