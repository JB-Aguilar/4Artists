const { Posts } = require ('../models/post.model')
const { User } = require("../models/user.model.js");
const { Like } = require("../models/like.model.js");
const cloudinary = require('../../db/cloudinary');

const getPosts = async(req, res) => {
    try {
        const post = await Posts.findAll({
          include: User,
        });
        const likes = await Like.findAll()
        const data = {
            post: post,
            likes: likes
        }
        res.status(200).json( data )
    }catch(error){
        res.status(500).send('Error: posts not found')
    }
}


const getOnePost = async(req, res) => {
    try {
        const post = await Posts.findByPk(req.params.id,{
            include: User
        })
        res.status(200).json( post )
    }catch(error){
        res.status(500).send('Error: Post not found')
    }
}

const createPost = async(req, res) => {
    try{
        if(!req.body.userId) {req.body.userId = res.locals.user.id}

        if (req.file) {
          const result = await cloudinary.uploader.upload(req.file.path);
          req.body.img = result.secure_url;
        }

        const post = await Posts.create(req.body)
        return res.status(200).json({ message: 'Success', post: post})
    }catch(error){
        res.status(500).send(error.message)
    }
}

const deletePost = async(req, res) => {
    try {
        const post = await Posts.destroy({
            where: { id: req.params.id}
        })

        if(post){
            return res.status(200).json('Post deleted')
        }else{
            return res.status(404).send('Error: Post not deleted')
        }
    }catch(error){
        return res.status(500).send('Error: Post not deleted')
    }
}

module.exports = { 
    createPost,
    getPosts,
    getOnePost,
    deletePost
 }