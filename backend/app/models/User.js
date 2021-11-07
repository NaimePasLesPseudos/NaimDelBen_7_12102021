const { BaseModel } = require('../database/orm')

class User extends BaseModel {
    static get tableName() {
        return 'users'
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['name', 'email', 'password', 'role'],
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

    static get hidden() {
        return ['password']
    }

    static modifiers = {
        displayPostOrComment(query) {
            query.select('id', 'name')
        }
    }

    static get relationMappings() {
        const Post = require('./Post')
            , Comment = require('./Comment')
            , React = require('./Reaction')

        return {
            posts: {
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
            },

            reactPosts: {
                relation: BaseModel.ManyToManyRelation,
                modelClass: React,
                join: {
                    from: 'users.id',
                    through: {
                        from: 'reactions_posts.user_id',
                        to: 'reactions_posts.reaction_id'
                    },
                    to: 'reactions.id'
                }
            }
        }
    }
}

module.exports = User