//Post Controller here

const {postModel} = require("../models/postModel");
const {userModel} = require("../models/userModel");
const fs = require("fs");
const path = require("path");
const { v4: uuid } = require("uuid");
const HttpError = require("../models/errorModel");

// ======> Create A post for user
//POST : api/posts
// Protected
const createPost = async (req, res, next) => {
  try {
    let { title, category, description } = req.body;
    if (!title || !category || !description) {
      return next(
        new HttpError(
          "All fields are required. Please filled all the feilds",
          400
        )
      );
    }
    const { thumbnail } = req.files;
    //checking the files thumbnails

    if (thumbnail.size > 2000000) {
      return next(
        new HttpError("File size is too large. Should be less than 2mb", 400)
      );
    }

    let fileName = thumbnail.name;
    let splitFileName = fileName.split(".");
    let newFileName =
      splitFileName[0] + uuid() + "." + splitFileName[splitFileName.length - 1];
    thumbnail.mv(
      path.join(__dirname, "..", "/uploads", newFileName),
      async (err) => {
        if (err) {
          return next(new HttpError(err, 400));
        } else {
          const newPost = await postModel.create({
            title,
            category,
            description,
            thumbnail: newFileName,
            creator: req.user.id,
          })
          if (!newPost) {
            return next(new HttpError("Post could not be created", 422));
          }
          // find user and increase count by 1
          const currentUser = await userModel.findById(req.user.id);
          const userPostCount = currentUser.posts + 1;
          await userModel.findByIdAndUpdate(req.user.id, {
            posts: userPostCount,
          });
          res.status(201).json(newPost);
        }
      }
    );
  } catch (error) {
    return next(new HttpError(error));
  }
};

// ======> Get single Post
//GET : api/posts/:id
// UNprotected
const getPost = async (req, res, next) => {};
// ======> Get All Post
//GET : api/posts/
// UNprotected
const getPosts = async (req, res, next) => {};
// ======>Get posts by category
//GET : api/posts/category/:category
// Unprotected
const getCategoryPost = async (req, res, next) => {};

// ======> Get users/Authors post
//GET : api/posts
// Unprotected
const getUserPost = async (req, res, next) => {};

// ======> Edit post
//PATCH : api/posts/:id
// Protected
const editPost = async (req, res, next) => {};

// ======> Delete a post
//DELETE : api/posts/:id
// Protected
const deletePost = async (req, res, next) => {};

module.exports = {
  createPost,
  getPost,
  getPosts,
  getCategoryPost,
  getUserPost,
  editPost,
  deletePost,
};
