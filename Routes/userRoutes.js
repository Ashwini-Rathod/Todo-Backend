const express = require("express");
const router = express.Router();
const { signUpUser, loginUser } = require("../controllers/userController");
const { isUserRegistered, checkReqBody, checkConfirmPassword, isEmailUnique} = require("../middlewares/userMiddlewares");

router.route("/signup").post(checkReqBody,checkConfirmPassword, isEmailUnique ,signUpUser);
router.route("/login").post(isUserRegistered ,loginUser);

module.exports = router;