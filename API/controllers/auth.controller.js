import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  //this prevents entering null string
  if (
    !username ||
    !email ||
    !password ||
    username == "" ||
    email == "" ||
    password == ""
  ) {
    next(errorHandler(400, "All fields are required"));
  }

  const hashedpassword = bcryptjs.hashSync(password, 10);

  //adding user name and password to string
  const newUser = new User({
    username: username,
    email: email,
    password: hashedpassword,
  });

  //this gives error message and handle the save part
  try {
    await newUser.save();
    res.json("signup Successful");
  } catch (err) {
    next(err);
  }
};

export const signin = async (req, res, next) => {
    const { email, password } = req.body;
  
    if (!email || !password || email === "" || password === "") {
      return next(errorHandler(400, "Invalid email or password"));
    }
  
    try {
      const validUser = await User.findOne({ email: email });
      if (!validUser) {
        return next(errorHandler(404, "User not found"));
      }
  
      const validPassword = bcryptjs.compareSync(password, validUser.password);
      if (!validPassword) {
        return next(errorHandler(400, "Invalid password"));
      }
  
      const { password: pass, ...rest } = validUser._doc; // Define rest here
      const token = jwt.sign({ userId: validUser._id }, process.env.JWT_SECRET);
      res.status(200).cookie("access token", token, { httpOnly: true }).json(rest);
    } catch (error) {
      next(error);
    }
  };
  
