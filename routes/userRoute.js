const express = require('express');
const { registerUser,loginUser,getSingleUser,updateUser,logoutUser } = require('../controller/userController');
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
 router.route("/profile/:id").get(getSingleUser);
 router.route("/updateProfile/:id").put(updateUser);
 router.route("/logout").get(logoutUser);
 
module.exports = router;