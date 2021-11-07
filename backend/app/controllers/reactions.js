const Reaction = require('../models/Reaction')
    , ReactionPost = require('../models/Reactions_posts')
    , date = new Date().toUTCString()

exports.getReactionsPost = async (req, res, next) => {
    try {
        const reactsPost = await ReactionPost.query()
            .withGraphFetched('posts')
            

        res.status(200).json(reactsPost)
    } catch (e) {
        return next(e)
    }
}

exports.addReactionPost = async (req, res, next) => {
    try {
        const addReactPost = await ReactionPost.query()
            .insertGraph({
                post_id: req.body.post_id,
                reaction_id: req.body.reaction_id,
                user_id: req.body.user_id,
                published: date
            })

        res.status(200).json("Nouvelle réaction ajoutée !")
    } catch (e) {
        return next(e)
    }
}

exports.deleteReactionPost = async (req, res, next) => {
    try {
        const delReactPost = await ReactionPost.query()
            .withGraphFetched('posts')

        res.status(200).json("Réaction supprimée !")
    } catch (e) {
        return next(e)
    }
}