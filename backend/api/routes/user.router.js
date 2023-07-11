const userRouter = require('express').Router()
const { getUsers, getOneUser } = require('../controllers/user.controller')

userRouter.get('/:id', getOneUser)
userRouter.get('/', getUsers)

module.exports = { userRouter }