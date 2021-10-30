const { BaseModel } = require('../database/orm')

class Reaction_Post extends BaseModel {
    static get tableName() {
        return 'reactions_posts'
    }

    static async create() {
        const db = this.knex()

        if (await db.schema.hasTable(this.tableName)) return

        await db.schema.createTable(this.tableName, table => {
            table.integer('post_id')
            table.integer('reaction_id')
            table.integer('user_id')
            table.string('published')
        })
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['post_id', 'reaction_id', 'user_id', 'published'],

            properties: {
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

            comments: {
                relation: BaseModel.BelongsToOneRelation,
                modelClass: Post,
                join: {
                    from: 'reactions_posts.posts_id',
                    to: 'posts.id'
                }
            },

            reactions: {
                relation: BaseModel.HasOneRelation ,
                modelClass: React,
                join: {
                    from: 'reactions_posts.reactions_id',
                    to: 'reactions.id'
                }
            }
        }
    }
}