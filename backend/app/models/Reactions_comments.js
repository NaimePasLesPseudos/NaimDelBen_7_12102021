const { BaseModel } = require('../database/orm')

class Reaction_Comment extends BaseModel {
    static get tableName() {
        return 'reactions_posts'
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['comment_id', 'reaction_id', 'user_id', 'published'],

            properties: {
                comment_id: { type: 'integer' },
                reaction_id: { type: 'integer' },
                user_id: { type: 'integer' },
                published: { type: 'string' }
            }
        }
    }

    static get relationMappings() {
        const User = require('./User')
            , Comment = require('./Comment')
            , React = require('./Reaction')

        return {
            users: {
                relation: BaseModel.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: 'reactions_comments.user_id',
                    to: 'users.id'
                }
            },

            comments: {
                relation: BaseModel.BelongsToOneRelation,
                modelClass: Comment,
                join: {
                    from: 'reactions_comments.comments_id',
                    to: 'comments.id'
                }
            },

            reactions: {
                relation: BaseModel.HasOneRelation ,
                modelClass: React,
                join: {
                    from: 'reactions_comments.reactions_id',
                    to: 'reactions.id'
                }
            }
        }
    }
}

module.exports = Reaction_Comment