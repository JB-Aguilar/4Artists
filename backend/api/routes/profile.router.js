const profileRouter = require('express').Router()
const { checkAuth } = require('../../middlewares/auth')

const {
    showProfile,
    updateMyUser,
    showMyPosts,
} = require ('../controllers/profile.controller')

profileRouter.get('/', checkAuth, showProfile)
profileRouter.get('/posts', checkAuth, showMyPosts)

profileRouter.put('/', checkAuth, updateMyUser)

module.exports = { profileRouter }