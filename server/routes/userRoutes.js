const { Router } = require("express");
const {
  registerUser,
  loginUser,
  getUser,
  changeAvatar,
  editUser,
  getAuthors,
} = require("../controllers/userControllers");

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/:id", getUser);
router.post("/change-avatar", changeAvatar);
router.post("/edit-user", editUser);
router.get("/authors", getAuthors);

module.exports = router;
