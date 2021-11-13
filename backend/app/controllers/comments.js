const Comment = require('../models/Comment')
    , date = new Date().toUTCString()

exports.getAllComments = async (req, res, next) => {
    try {
        const comments = await Comment.query()
            .where('comments.post_id', req.params.id)
            .withGraphFetched('authors')
            .orderBy('published', 'desc')

        res.status(200).json(comments)
    } catch (e) {
        return next(e)
    }
}

exports.getOneComment = async (req, res, next) => {
    try {
        const comment = await Comment.query()
            .withGraphFetched('authors')
            .where('comments.post_id' ,req.params.id)
            .where('comments.id', req.params.commentId)

        res.status(200).json(comment)
    } catch (e) {
        return next(e)
    }
}

exports.createComment = async (req, res, next) => {
    try {
        const comment = await Comment.query().insertGraph({
            author_id: req.userId,
            post_id: req.body.post_id,
            content: req.body.content,
            published: date,
            updated: date
        })

        const commentRes = await Comment.query()
            .findById(comment.id)
            .withGraphFetched('authors')

        res.status(200).json(commentRes)
    } catch (e) {
        return next(e)
    }
}

exports.updateComment = async (req, res, next) => {
    try {
        const userComment = await Comment.query().findById(req.params.id)
        
        if (req.userId !== userComment.author_id && req.role === "user") {
            return res.status(401).json({ error: '401: User is not authorizated' })
        }

        const comment = await Comment.query()
            .findById(req.params.id)
            .patch({
                content: req.body.content,
                updated: date
            })

        res.status(200).json("Commentaire modifié !")
    } catch (e) {
        return next(e)
    }
}

exports.deleteOneComment = async (req, res, next) => {
    try {
        const userComment = await Comment.query().findById(req.params.id)
        
        if (req.userId !== userComment.author_id && req.role === "user") {
            return res.status(401).json({ error: '401: User is not authorizated' })
        }

        await Comment.query().findById(req.params.id).delete()

        res.json("!!! Commentaire effacé !!!")
    } catch (e) {
        return next(e)
    }
}