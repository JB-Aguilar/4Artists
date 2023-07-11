const router = require('express').Router()
const { authRouter } = require('./auth.router.js')
const { postRouter } = require('./post.router.js')


router.use('/auth', authRouter)
router.use('/post', postRouter)
module.exports = { router }