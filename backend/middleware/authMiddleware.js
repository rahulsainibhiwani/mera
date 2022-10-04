import jwt from "jsonwebtoken";
import expressAsyncHandler from "express-async-handler";
import User from "../Model/User.js";
import dotenv from "dotenv";
import { error, failed } from "../config/helper.js";
dotenv.config();

export const authMiddleware = expressAsyncHandler(async (req, res, next) => {
  let token;

  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];

      let result = await jwt.verify(token, process.env.JWT_SECRET_KEY);

      const adminProfile = await User.findOne({
        _id: result.id,
        loginTime: result.iat,
      }).select("-password");

      if (adminProfile) {
        console.log("token Valid");
        req.admin = adminProfile;
        next();
      } else {
        return failed(res, "Please Login");
      }
    } else {
      return failed(res, "No Token, No Authorization");
    }
  } catch (err) {
    if (err.message === "jwt expired") {
      return error(res, "Session has expired Please login first");
    } else {
      return error(res, err.message);
    }
  }
});

export const admin = expressAsyncHandler(async (req, res, next) => {
  try {
    if (req.admin && req.admin.isAdmin) {
      next();
    } else {
      res.status(401);
      throw new Error("Not authourized as an Admin");
    }
  } catch (err) {
    return error(res, err.message);
  }
});
