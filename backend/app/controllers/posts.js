const Post = require('../models/Post')
    , ReactPosts = require('../models/Reactions_posts')
    , date = new Date().toUTCString()

exports.getAllPosts = async (req, res, next) => {
    try {
        const posts = await Post.query().select([
            'posts.*',
                
            Post.relatedQuery('comments')
                .count()
                .as('NumberOfComments'),

            Post.relatedQuery('reactPosts')
                .where('reaction_id', 1)
                .count()
                .as('NumberOfThumbs'),
            
            Post.relatedQuery('reactPosts')
                .count()
                .where('reaction_id', 2)
                .as('NumberOfHearts'),

            Post.relatedQuery('reactPosts')
                .count()
                .where('reaction_id', 3)
                .as('NumberOfLightBulbs'),
            
            Post.relatedQuery('reactPosts')
                .count()
                .where('reaction_id', 4)
                .as('NumberOfRofls'),
        ]).orderBy('published', 'desc')
        .withGraphFetched('authors(displayPostOrComment)')
        .withGraphFetched('UserReactPost(selectUserId)')
        .modifiers({
            selectUserId(builder) {
                builder.select('user_id', 'reaction_id')
            }
        })
        
        res.status(200).json(posts)
    } catch (e) {
        return next(e)
    }
}

exports.getOnePost = async (req, res, next) => {
    try {
        const post = await Post.query()
            .where('posts.id', req.params.id)
            .select([
                'posts.*',
    
                Post.relatedQuery('comments')
                    .count()
                    .as('NumberOfComments'),
    
                Post.relatedQuery('reactPosts')
                    .count()
                    .where('reaction_id', 1)
                    .as('NumberOfThumbs'),
                
                Post.relatedQuery('reactPosts')
                    .count()
                    .where('reaction_id', 2)
                    .as('NumberOfHearts'),
    
                Post.relatedQuery('reactPosts')
                    .count()
                    .where('reaction_id', 3)
                    .as('NumberOfLightBulbs'),
                
                Post.relatedQuery('reactPosts')
                    .count()
                    .where('reaction_id', 4)
                    .as('NumberOfRofls'),
            ])
            .withGraphFetched('authors(displayPostOrComment)')
            .withGraphFetched('UserReactPost(selectUserId)')
            .modifiers({
                selectUserId(builder) {
                    builder.select('user_id')
                }
            })

        res.status(200).json(post[0])
    } catch (e) {
        return next(e)
    }
}

exports.createPost = async (req, res, next) => {
    try {
        const post = await Post.query().insertGraph({
            author_id: req.userId,
            title: req.body.title,
            content: req.body.content,
            published: date,
            updated: date
        })

        res.status(200).json("Bravo pour ton nouvel article !")
    } catch (e) {
        return next(e)
    }
}

exports.updatePost = async (req, res, next) => {
    try {
        const userPost = await Post.query().findById(req.params.id)

        if (req.userId !== userPost.author_id && req.role === "user") {
            return res.status(401).json({ error: '401: User is not authorizated' })
        }

        const post = await Post.query()
            .findById(req.params.id)
            .patch({
                title: req.body.post.title,
                content: req.body.post.content,
                updated: date
            })

        res.status(200).json("Article modifié !")
    } catch (e) {
        return next(e)
    }
}

exports.deleteOnePost = async (req, res, next) => {
    try {
        const userPost = await Post.query().findById(req.params.id)
        
        if (req.userId !== userPost.author_id && req.role === "user") {
            return res.status(401).json({ error: '401: User is not authorizated' })
        }

        await Post.query().findById(req.params.id).delete()

        res.json("!!! Article effacé !!!")
    } catch (e) {
        return next(e)
    }
}