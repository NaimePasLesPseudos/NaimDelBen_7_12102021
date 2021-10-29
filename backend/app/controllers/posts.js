const Post = require('../models/Post')
    , date = new Date().toUTCString()

exports.getAllPosts = async (req, res, next) => {
    try {
        const posts = await Post.query()

        res.status(200).send(posts)
    } catch (e) {
        return next(e)
    }
}

exports.getOnePost = async (req, res, next) => {
    try {
        const post = await Post.query().findById(req.params.id)

        res.status(200).send(post)
    } catch (e) {
        return next(e)
    }
}

exports.createPost = async (req, res, next) => {
    try {
        const post = await Post.query().insertGraph({
            author_id: req.body.author_id,
            title: req.body.title,
            content: req.body.content,
            published: date,
            updated: date
        })

        res.status(200).send("Bravo pour ton nouvel article !")
    } catch (e) {
        return next(e)
    }
}

exports.updatePost = async (req, res, next) => {
    try {
        const post = await Post.query()
            .findById(req.params.id)
            .patch({
                title: req.body.title,
                content: req.body.content,
                updated: date
            })

        res.status(200).send("Article modifié !")
    } catch (e) {
        return next(e)
    }
}

exports.deleteOnePost = async (req, res, next) => {
    try {
        await Post.query().findById(req.params.id).delete()

        res.send("🚮 !!! Article effacé !!! 🚮")
    } catch (e) {
        return next(e)
    }
}