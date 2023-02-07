const express = require("express");
const router = express.Router();
const {
  listUser,
  detailUser,
  createUser,
  upDateUser,
  deleteUser,
} = require("./controller/userController");

router.get("/users", listUser);
//lấy từng cái
router.get("/users/:id", detailUser);
//thêm user
router.post("/users", createUser);
//update User
router.put("/users/:id", upDateUser);
//xóa user
router.delete("/users/:id", deleteUser);
module.exports = router;
