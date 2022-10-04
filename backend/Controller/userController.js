import User from "../Model/User.js";
import asyncHanlder from "express-async-handler";
import { Validator } from "node-input-validator";
import { checkValidation, error, failed, success } from "../config/helper.js";
import { decryptPass, encryptPass } from "../utils/crypto.js";
import { genrateToken } from "../utils/genrateToken.js";

const createUser = asyncHanlder(async (req, res) => {
  try {
    const v = new Validator(req.body, {
      name: "string|required",
      email: "string|required|email",
      password: "string|required",
    });
    const value = JSON.parse(JSON.stringify(v));
    const errorResponse = await checkValidation(v);
    if (errorResponse) {
      return failed(res, errorResponse);
    } else {
      const userExist = await User.findOne({ email: value.inputs.email });
      if (userExist) {
        return failed(res, "User Already Exist");
      } else {
        const encPassword = encryptPass(value.inputs.password);
        const result = await User.create({
          ...value.inputs,
          password: encPassword,
        });
        return success(res, "User Created", result);
      }
    }
  } catch (err) {
    return error(res, err.message);
  }
});

const getUsers = asyncHanlder(async (req, res) => {
  try {
    const users = await User.find().select("-password");
    const total = await User.find().count();
    if (users) {
      return success(res, `${total} Users Found`, users);
    } else {
      return failed(res, "User list Empty");
    }
  } catch (er) {
    return error(res, er.message);
  }
});

const getUser = asyncHanlder(async (req, res) => {
  try {
    const userExist = await User.findById(req.params.id);
    if (userExist) {
      return success(res, "User Found", userExist);
    } else {
      return failed(res, "User Not Found");
    }
  } catch (err) {
    return error(res, err.message);
  }
});

const loginAdmin = asyncHanlder(async (req, res) => {
  const v = new Validator(req.body, {
    email: "string|required|email",
    password: "string|required",
  });
  const value = JSON.parse(JSON.stringify(v));
  const errorResponse = await checkValidation(v);
  if (errorResponse) {
    return failed(res, errorResponse);
  } else {
    const userExist = await User.findOne({
      email: value.inputs.email,
    });
    if (!userExist) {
      return failed(res, "User Not Found");
    } else {
      const decPassword = decryptPass(userExist.password);
      if (decPassword === value.inputs.password) {
        const token = genrateToken(userExist._id);
        await User.findOneAndUpdate(
          //here we update  our login time
          { _id: userExist._id },
          {
            $set: { loginTime: (await token).time },
          }
        );
        const admin = {
          name: userExist.name,
          email: userExist.email,
          isAdmin: userExist.isAdmin,
          token: (await token).token,
        };
        return success(res, "Login Success", admin);
      } else {
        return failed(res, "Wrong Password");
      }
    }
  }
});

const adminProfile = asyncHanlder(async (req, res) => {
  try {
    if (req.admin) {
      return success(res, "Admin Profile", req.admin);
    }
  } catch (err) {
    return error(res, err.message);
  }
});

const logout = asyncHanlder(async (req, res) => {
  const admin = await User.updateOne(
    { _id: req.admin._id },
    {
      $set: {
        loginTime: 0,
      },
    }
  );
  if (admin) {
    return success(res, "Logout Successfully");
  } else {
    res.status(400);
    throw new Error("User not Found");
  }
});
export { createUser, getUsers, getUser, loginAdmin, adminProfile, logout };
