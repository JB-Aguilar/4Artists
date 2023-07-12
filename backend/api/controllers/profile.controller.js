const bcrypt = require('bcrypt')
const { User } = require('../models/user.model')

const showProfile = async (req, res) => {
    try{
        return res.json(res.locals.user)
    }catch(error){
        return res.status(404).send('Error: User not found')
    }
}

const updateMyUser = async(req, res) => {
    try {
        const [userExist, user] = await User.update(req.)
    }
}

