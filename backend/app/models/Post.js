const { BaseModel } = require('../database/orm')

class Post extends BaseModel {
    static get tableName() {
        return 'posts'
    }

    static async create() { // Knex instance
        const db = this.knex()

        if (await db.schema.hasTable(this.tableName)) return
        
        await db.schema.createTable(this.tableName, table => {
            table.increments(this.idColumn).primary()
            table.integer('author_id')
            table.string('title')
            table.string('content')
            table.string('published')
            table.string('updated')
        })
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

        return {
            users: {
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
            }
        }
    }
}

module.exports = Post