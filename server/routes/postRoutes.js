const { Router } = require("express");
const {
  createPost,
  getPost,
  getPosts,
  getCategoryPost,
  getUserPost,
  editPost,
  deletePost,
} = require("../controllers/postController");
const router = Router();

router.post("/", createPost);
router.get("/:id", getPost);
router.get("/", getPosts);
router.get("/category/:category", getCategoryPost);
router.get("/user/:id", getUserPost);
router.patch("/:id", editPost);
router.delete("/:id", deletePost);

module.exports = router;
