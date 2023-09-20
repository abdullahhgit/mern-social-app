const postMessageModel = require('../models/postMessage')

const getPosts = async (req, res) => {
    try {
        const postMessage = await postMessageModel.find()

        res.status(200).json(postMessage)

    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

const createPosts = async (req, res) => {
    const post = req.body;

    const newPost = new postMessageModel(post)

    try {
        await newPost.save()

        res.status(200).json(newPost)

    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

module.exports = {
    getPosts,
    createPosts,
};