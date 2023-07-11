const bcrypt = require('bcrypt')
const { User } = require('../models/user.model')

const getUsers = async (req, res) => {
    try {
        const users = await User.findAll()
        res.status(200).json( users )
    }catch(error){
        res.status(500).send('Error: Users not found')
    }
}

const getOneUser = async (req, res) => {
    try{
        const users = await User.findByPk(req.params.id)
        res.status(200).json( user )
    }catch(error){
        res.status(500).send('Error: User not found')
    }
}

module.exports = { getOneUser, getUsers}