const { BaseModel } = require('../database/orm')

class Comment extends BaseModel {
    static get tableName() {
        return 'comments'
    }

    static async create() { // Knex instance
        const db = this.knex()

        if (await db.schema.hasTable(this.tableName)) return
        
        await db.schema.createTable(this.tableName, table => {
            table.increments(this.idColumn).primary()
            table.integer('author_id')
            table.integer('post_id')
            table.string('content')
            table.string('published')
            table.string('updated')
        })
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['author_id', 'post_id', 'content', 'published', 'updated'],
            properties: {
                id: { type: 'integer' },
                author_id: { type: 'integer' },
                post_id: { type: 'integer' },
                content: { type: 'string' },
                published: { type: 'string' },
                updated: { type: 'string' },
            }
        }
    }

    static get relationMappings() {
        const User = require('./User')
            , Post = require('./Post')

        return {
            posts: {
                relation: BaseModel.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: 'comments.author_id',
                    to: 'users.id'
                }
            },

            users: {
                relation: BaseModel.BelongsToOneRelation,
                modelClass: Post,
                join: {
                    from: 'comment.post_id',
                    to: 'post.comment_id'
                }
            }
        }
    }
}

module.exports = Comment