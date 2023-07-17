const userRouter = require('express').Router()
const {
  getUsers,
  getOneUser,
  createLike,
} = require("../controllers/user.controller");

userRouter.get('/:id', getOneUser)
userRouter.get('/', getUsers)
userRouter.post("/:userId/likes/:postId", createLike);

module.exports = { userRouter }