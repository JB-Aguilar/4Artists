const bcrypt = require('bcrypt')
const { User } = require('../models/user.model')
const { Post } = require('../models/post.model')

const showProfile = async (req, res) => {
    try{
        return res.json(res.locals.user)
    }catch(error){
        return res.status(404).send('Error: User not found')
    }
}

const updateMyUser = async(req, res) => {
    try {
        const [userExist, user] = await User.update(req.body, {
            returning: true,
            where: {id: res.locals.user.id}
        })

        if (userExist !== 0){
            return res.status(200).json({ message: 'User updated', user: user})
        }else{
            return res.status(404).send('Error: user not found')
        }
    } catch (err){
        res.status(500).send('Error: User not found')
    }
}


const showMyPosts = async (req, res) => {
    try{
        const posts = await res.locals.user.getPosts({
            include: User
        })
        if(posts){
            return res.status(200).json( posts )
        }else{
            return res.status(404).send('No travels found')
        }
    }catch(error){
        res.status(500).send(error.message)
    }
}

module.exports = {
    showProfile,
    updateMyUser,
    showMyPosts
}
