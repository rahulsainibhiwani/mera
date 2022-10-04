import express from "express";
import {
  authenticateHeader,
  authenticateJWT,
} from "../config/checkHeaderKeys.js";
import {
  adminProfile,
  createUser,
  getUser,
  getUsers,
  loginAdmin,
  logout,
} from "../Controller/userController.js";
import { admin, authMiddleware } from "../middleware/authMiddleware.js";

const userRoute = express.Router();

userRoute.route("/createUser").post(authenticateHeader, createUser);
userRoute
  .route("/getUsers")
  .get(authenticateHeader, authMiddleware, admin, getUsers);
userRoute
  .route("/getUser")
  .get(authenticateHeader, authMiddleware, admin, getUser);
userRoute.route("/loginAdmin").post(authenticateHeader, loginAdmin);
userRoute
  .route("/adminProfile")
  .get(authenticateHeader, authMiddleware, admin, adminProfile);
userRoute
  .route("/logout")
  .get(authenticateHeader, authMiddleware, admin, logout);

export default userRoute;
