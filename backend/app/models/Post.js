const { BaseModel } = require('../database/orm')

class Post extends BaseModel {
    static get tableName() {
        return 'posts'
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['author_id', 'title', 'content', 'published', 'updated'],
            properties: {
                id: { type: 'integer' },
                author_id: { type: 'integer' },
                title: { type: 'string' },
                content: { type: 'string' },
                published: { type: 'string' },
                updated: { type: 'string' },
            }
        }
    }

    static get relationMappings() {
        const User = require('./User')
            , Comment = require('./Comment')
            , React = require('./Reaction')
            , ReactPost = require('./Reactions_posts')

        return {
            authors: {
                relation: BaseModel.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: 'posts.author_id',
                    to: 'users.id'
                }
            },

            comments: {
                relation: BaseModel.HasManyRelation,
                modelClass: Comment,
                join: {
                    from: 'posts.id',
                    to: 'comments.post_id'
                }
            },

            reactPosts: {
                relation: BaseModel.ManyToManyRelation,
                modelClass: React,
                join: {
                    from: 'posts.id',
                    through: {
                        from: 'reactions_posts.post_id',
                        to: 'reactions_posts.reaction_id'
                    },
                    to: 'reactions.id'
                }
            },

            UserReactPost: {
                relation: BaseModel.HasManyRelation,
                modelClass: ReactPost,
                join: {
                    from: 'posts.id',
                    to: 'reactions_posts.post_id'
                }
            }
        }
    }
}

module.exports = Post