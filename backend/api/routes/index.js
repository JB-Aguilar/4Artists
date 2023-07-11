const router = require('express').Router()
const { authRouter } = require('./auth.router.js')
const { postRouter } = require('./post.router.js')
const { userRouter } = require('./user.router.js')


router.use('/auth', authRouter)
router.use('/post', postRouter)
router.use('/users',userRouter)
module.exports = { router }