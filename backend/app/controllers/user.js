const User = require('../models/User')

exports.getAllUsers = async (req, res, next) => {
    try {
        const users = await User.query().orderBy('name')

        res.status(200).send(users)
    } catch (e) {
        return next(e)
    }
}

exports.getOneUser = async (req, res, next) => {
    try {
        const user = await User.query()
            .findById(req.params.id)

        res.send(user)
    } catch (e) {
        return next(e)
    }
}

exports.updateOneUser = async (req, res, next) => {
    try {
        await User.query().findById(req.params.id).patch(req.body)

        res.send("Profil modifié !")
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

        res.send(user)
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

        res.send(user)
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
            // .orderBy('reactions.published', 'desc')

        res.send(user)
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

        res.send(user)
    } catch (e) {
        return next(e)
    }
}

exports.deleteOneUser = async (req, res, next) => {
    try {
        await User.query().findById(req.params.id).delete()

        res.send("🚮 !!! Profil détruit !!! 🚮")
    } catch (e) {
        return next(e)
    }
}