const postRouter = require('express').Router()
const { checkAuth } = require('../../middlewares/auth')
const { createPost, getOnePost, getPosts, deletePost } = require('../controllers/post.controller')
const upload = require('../../middlewares/multer')

postRouter.get('/:id', getOnePost, )
postRouter.get('/', getPosts)


postRouter.post('/', checkAuth, upload.single('img'), createPost )

postRouter.delete('/:id', checkAuth, deletePost)

module.exports = { postRouter }