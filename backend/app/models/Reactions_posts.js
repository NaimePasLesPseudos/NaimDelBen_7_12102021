const { BaseModel } = require('../database/orm')

class Reaction_Post extends BaseModel {
    static get tableName() {
        return 'reactions_posts'
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['post_id', 'reaction_id', 'user_id', 'published'],

            properties: {
                id: { type: 'integer' },
                post_id: { type: 'integer' },
                reaction_id: { type: 'integer' },
                user_id: { type: 'integer' },
                published: { type: 'string' }
            }
        }
    }

    static get relationMappings() {
        const User = require('./User')
            , Post = require('./Post')
            , React = require('./Reaction')

        return {
            users: {
                relation: BaseModel.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: 'reactions_posts.user_id',
                    to: 'users.id'
                }
            },

            posts: {
                relation: BaseModel.BelongsToOneRelation,
                modelClass: Post,
                join: {
                    from: 'reactions_posts.post_id',
                    to: 'posts.id'
                }
            },

            reactions: {
                relation: BaseModel.HasOneRelation ,
                modelClass: React,
                join: {
                    from: 'reactions_posts.reaction_id',
                    to: 'reactions.id'
                }
            }
        }
    }
}

module.exports = Reaction_Post