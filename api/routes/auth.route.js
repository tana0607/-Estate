const express = require("express");
const {
  google,
  signOut,
  contact,
  signin,
  signup,
} = require("../controllers/auth.controller.js");

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/google", google);
router.post("/contact", contact);
router.get("/signout", signOut);

module.exports = router;
