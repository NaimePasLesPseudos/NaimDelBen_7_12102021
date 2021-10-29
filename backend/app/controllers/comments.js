const Comment = require('../models/Comment')
    , date = new Date().toUTCString()

exports.getAllComments = async (req, res, next) => {
    try {
        const comments = await Comment.query()

        res.status(200).send(comments)
    } catch (e) {
        return next(e)
    }
}

exports.getOneComment = async (req, res, next) => {
    try {
        const comment = await Comment.query().findById(req.params.id)

        res.status(200).send(comment)
    } catch (e) {
        return next(e)
    }
}

exports.createComment = async (req, res, next) => {
    try {
        const comment = await Comment.query().insertGraph({
            author_id: req.body.author_id,
            post_id: req.body.post_id,
            content: req.body.content,
            published: date,
            updated: date
        })

        res.status(200).send("Bravo pour ton nouveau commentaire !")
    } catch (e) {
        return next(e)
    }
}

exports.updateComment = async (req, res, next) => {
    try {
        const comment = await Comment.query()
            .findById(req.params.id)
            .patch({
                content: req.body.content,
                updated: date
            })

        res.status(200).send("Commentaire modifié !")
    } catch (e) {
        return next(e)
    }
}

exports.deleteOneComment = async (req, res, next) => {
    try {
        await Comment.query().findById(req.params.id).delete()

        res.send("🚮 !!! Commentaire effacé !!! 🚮")
    } catch (e) {
        return next(e)
    }
}