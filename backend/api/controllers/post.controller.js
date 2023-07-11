const { Posts } = require ('../models/post.model')

const getPosts = async(req, res) => {
    try {
        const post = await Posts.findAll()
        res.status(200).json( post )
    }catch(error){
        res.status(500).send('Error: posts not found')
    }
}

const getOnePost = async(req, res) => {
    try {
        const post = await Posts.findByPk(req.params.id)
        res.status(200).json( post )
    }catch(error){
        res.status(500).send('Error: Post not found')
    }
}

const createPost = async(req, res) => {
    try {
        const text = req.body.text
        console.log()
        
        if (!text){
            return res.status(400).json({error: 'Text is required'})
        }

        const newPost = new Posts({ text })
        const savedPost = await newPost.save()

        res.status(201).json(savedPost)
    }catch(error){
        res.status(500).json({error: 'An error occurred while creating post'})
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