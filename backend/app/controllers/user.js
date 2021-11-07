const User = require('../models/User')
    , Post = require('../models/Post')

exports.getAllUsers = async (req, res, next) => {
    try {
        const users = await User.query().orderBy('name')

        res.status(200).json(users)
    } catch (e) {
        return next(e)
    }
}

exports.getOneUser = async (req, res, next) => {
    try {
        const user = await User.query()
            .where('users.id', req.params.id)

            res.status(200).json(user)
    } catch (e) {
        return next(e)
    }
}

exports.updateOneUser = async (req, res, next) => {
    try {
        await User.query().findById(req.params.id).patch(req.body)
        
        res.json("Profil modifié !")
    } catch (e) {
        return next(e)
    }
}

exports.getOneUserWithAllPosts = async (req, res, next) => {
    try {
        const user = await User.query()
        .where('users.id', req.params.id)
        .join('posts', 'users.id', 'posts.author_id')
        .select('users.name', 'users.email', 'posts.title', 'posts.id')
        .orderBy('posts.published', 'desc')
        
        res.json(user)
    } catch (e) {
        return next(e)
    }
}

exports.getOneUserWithOnePost = async (req, res, next) => {
    try {
        const user = await User.query()
            .where('users.id', req.params.id)
                .select('id', 'name')
                .select([
        
                    User.relatedQuery('reactPosts')
                        .count()
                        .where('reaction_id', 1)
                        .where('post_id', req.params.post_id)
                        .as('NumberOfThumbs'),
                    
                    User.relatedQuery('reactPosts')
                        .count()
                        .where('reaction_id', 2)
                        .where('post_id', req.params.post_id)
                        .as('NumberOfHearts'),
        
                    User.relatedQuery('reactPosts')
                        .count()
                        .where('reaction_id', 3)
                        .where('post_id', req.params.post_id)
                        .as('NumberOfLightBulbs'),
                    
                    User.relatedQuery('reactPosts')
                        .count()
                        .where('reaction_id', 4)
                        .where('post_id', req.params.post_id)
                        .as('NumberOfRofls'),
                ])
            .withGraphFetched('posts(onlyThisPost)')
                

            .modifiers({
                onlyThisPost(builder) {
                    builder.where('posts.id', req.params.post_id)
                }
            })

            res.status(200).json(user)
    } catch (e) {
        return next(e)
    }
}

exports.getOneUserWithAllComments = async (req, res, next) => {
    try {
        const user = await User.query()
            .where('users.id', req.params.id)
            .join('comments', 'users.id', 'comments.author_id')
            .select('users.name', 'users.email', 'comments.content', 'comments.id')
            .orderBy('comments.published', 'desc')

        res.json(user)
    } catch (e) {
        return next(e)
    }
}

exports.getOneUserWithAllReactions = async (req, res, next) => {
    try {
        const user = await User.query()
            .where('users.id', req.params.id)
            .join('reactions', 'users.id', 'reactions.author_id')
            .select('users.name', 'users.email', 'reactions.id')
            .orderBy('reactions.published', 'desc')

        res.json(user)
    } catch (e) {
        return next(e)
    }
}

exports.getOneUserHistory = async (req, res, next) => {
    try {
        // TODO: créer le controller avec toutes les tables
        const user = await User.query()
            .where('users.id', req.params.id)
            .join('posts', 'users.id', 'posts.author_id')
            .select('users.name', 'users.email', 'posts.title', 'posts.id')

        res.json(user)
    } catch (e) {
        return next(e)
    }
}

exports.deleteOneUser = async (req, res, next) => {
    try {
        await User.query().findById(req.params.id).delete()

        res.json("🚮 !!! Profil détruit !!! 🚮")
    } catch (e) {
        return next(e)
    }
}