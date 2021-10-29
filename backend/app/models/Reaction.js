const { BaseModel } = require('../database/orm')

class Reaction extends BaseModel {
    static get tableName() {
        return 'reactions'
    }

    static async create() {
        const db = this.knex()

        if (await db.schema.hasTable(this.tableName)) return

        await db.schema.createTable(this.tableName, table => {
            table.increments(this.idColumn).primary()
            table.string('label')
        })
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['label'],

            properties: {
                id: { type: 'integer' },
                label: { type: 'string' }
            }
        }
    }

    static get relationMappings() {
        const ReactPosts = require('./Reactions_posts')
            , ReactComments = require('./Reactions_comments')

        return {
            reactPosts: {
                relation: BaseModel.HasManyRelation,
                modelClass: ReactPosts,
                join: {
                    from: 'reacts.id',
                    to: 'reactions_posts.reaction_id'
                }
            },

            reactComments: {
                relation: BaseModel.HasManyRelation,
                modelClass: ReactComments,
                join: {
                    from: 'reacts.id',
                    to: 'reactions_comments.reaction_id'
                }
            }
        }
    }
}

module.exports = Reaction