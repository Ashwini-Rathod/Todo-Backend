const{ verifyToken }= require("../helper/jwtAuthentication");
const User = require("../models/userSchema");
const sendError = require("../helper/sendError");
const AppError = require("../helper/appErrorClass");
const sendResponse = require("../helper/sendResponse");

const protectRoute = async (req, res, next)=>{
    console.log("headers in req body", req.headers.authorization);
  // Finding the token
    if (!req.headers.authorization) {
      return sendError(
        new AppError(401, "Unsuccessful", "Please login or signup"),
        req,
        res,
        );
    }
    //if headers are present
  let jwtToken = req.headers.authorization.split(" ")[1];
  console.log("jwt token: ",jwtToken)
  let decoded;
  try {
        decoded = await verifyToken(jwtToken, process.env.JWT_SECRET);
        console.log("decoded result:", decoded);
        console.log("decoded email: ", decoded.email);
  } catch (err) {
    return sendError(
      new AppError(401, "Unsuccesssul", "Invalid Token"),
      req,
      res,
    );
  }
  try{
    let {email : currentUser} = await User.findOne({email: decoded.email});
    console.log({email: currentUser});
    if (!currentUser) {
      return sendError(
        new AppError(401, "Unsuccesssul", "Please login or signup"),
        req,
        res,
      );
    }
    req.currentUser = {email: currentUser};
    next();
  }catch(err){
    console.log(err);
  }
}

module.exports.protectRoute = protectRoute;