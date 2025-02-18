const express = require("express");
const { registerUser, loginUser, currentUser } = require("../controller/userController");
const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router();

// Route for user registration
router.post("/register", registerUser);

// Route for user login
router.post("/login", loginUser);

// Route for getting current user info
router.get("/current",validateToken,currentUser);

module.exports = router;
