const { BaseModel } = require('../database/orm')

class User extends BaseModel {
    static get tableName() {
        return 'users'
    }

    static async create() { // Knex instance
        const db = this.knex()

        if (await db.schema.hasTable(this.tableName)) return
        
        await db.schema.createTable(this.tableName, table => {
            table.increments(this.idColumn).primary()
            table.string('name')
            table.string('email').unique()
            table.string('password')
            table.string('role')
            table.string('bio')
            table.string('mobile')
            table.string('picture')
            table.string('background')
            table.string('gender')
            table.string('birthday')
            table.string('registred')
            table.string('lastLogin')
        })
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: [],
            properties: {
                id: { type: 'integer' },
                name: { type: 'string' },
                email: { type: 'string' },
                password: { type: 'string' },
                role: { type: 'string' },
                bio: { type:'string' },
                mobile: { type: 'string' },
                picture: { type: 'string' },
                background: { type: 'string' },
                gender: { type: 'string' },
                birthday: { type: 'string' },
                registred: { type: 'string' },
                lastLogin: { type: 'string' },
            }
        }
    }

    static get relationMappings() {
        const Post = require('./Post')
            , Comment = require('./Comment')

        return {
            topics: {
                relation: BaseModel.HasManyRelation,
                modelClass: Post,
                join: {
                    from: 'users.id',
                    to: 'posts.author_id'
                }
            },

            comments: {
                relation: BaseModel.HasManyRelation,
                modelClass: Comment,
                join: {
                    from: 'users.id',
                    to: 'comments.author_id'
                }
            }
        }
    }
}

module.exports = User