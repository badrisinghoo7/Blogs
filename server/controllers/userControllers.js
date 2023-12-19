//========> Register a new user
// POST : api/users/register
// unprotected route

const HttpError = require("../models/errorModel");
const { userModel } = require("../models/userModel");
const bcrypt = require("bcryptjs");

const registerUser = async (req, res, next) => {
  try {
    const { name, email, password, password2 } = req.body;
    if (!name || !email || !password) {
      return next(new HttpError("Fill in all fields.", 422));
    }
    const newEmail = email.toLowerCase();
    const emailExists = await userModel.findOne({ email: newEmail });

    if (emailExists) {
      return next(new HttpError("Email already exists.", 422));
    }

    if (password.trim().length < 6) {
      return next(
        new HttpError("Password must be at least 6 characters.", 422)
      );
    }

    if (password !== password2) {
      return next(new HttpError("Passwords do not match.", 422));
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);

    const newUser = await userModel.create({
      name,
      email: newEmail,
      password: hashedPass,
    });
    res
      .status(201)
      .json(`New user ${(newUser, email)} registered successfully`);
  } catch (error) {
    return next(new HttpError("User registration failed", 422));
  }
};

//========> Login a  Registered user
// POST : api/users/login
// unprotected route

const loginUser = async (req, res, next) => {
  try {
  } catch (error) {}
};

//========>user profile
// POST : api/users/:id
// protected route

const getUser = async (req, res, next) => {
  try {
  } catch (error) {}
};

//========> Change user avatar(Profile picture)
// POST : api/users/change-avatar
// protected route

const changeAvatar = async (req, res, next) => {
  res.json("Register USer");
};

//========> Edit user details (from profile page)
// POST : api/users/edit-user
// protected route

const editUser = async (req, res, next) => {
  res.json("Register USer");
};

//========> get user
// POST : api/users/authors
// Unprotected route

const getAuthors = async (req, res, next) => {
  res.json("Register USer");
};

module.exports = {
  registerUser,
  loginUser,
  getUser,
  changeAvatar,
  editUser,
  getAuthors,
};
