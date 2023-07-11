const postRouter = require('express').Router()
const { checkAuth } = require('../../middlewares/auth')
const { createPost, getOnePost, getPosts, deletePost } = require('../controllers/post.controller')

postRouter.get('/:id', getOnePost)
postRouter.get('/', getPosts)


postRouter.post('/', createPost, checkAuth)

postRouter.delete('/:id', deletePost, checkAuth)

module.exports = { postRouter }