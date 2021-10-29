const { BaseModel } = require('../database/orm')

class Reaction_Comment extends BaseModel {
    static get tableName() {
        return 'reactions_posts'
    }

    static async create() {
        const db = this.knex()

        if (await db.schema.hasTable(this.tableName)) return

        await db.schema.createTable(this.tableName, table => {
            table.integer('comment_id')
            table.integer('reaction_id')
            table.integer('user_id')
            table.string('published')
        })
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
            , Post = require('./Post')
            , Comment = require('./Comment')
            , ReactPosts = require('./Reactions_posts')
            , ReactComments = require('./Reactions_comments')

            return {
            }
    }
}