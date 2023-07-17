const userRouter = require('express').Router()
const {
  getUsers,
  getOneUser,
  toggleLike,
} = require("../controllers/user.controller");

userRouter.get('/:id', getOneUser)
userRouter.get('/', getUsers)
userRouter.post("/:userId/likes/:postId", toggleLike);

module.exports = { userRouter }