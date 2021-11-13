const Knex = require('knex')
    , knexConfig = require('../config/knexfile')
    , { Model } = require('objection')
    , visibilityPlugin = require('objection-visibility').default;

// Heroku DB connection
const Db = Knex(knexConfig.default)
    , PRIMARY_KEY = 'id'

Model.knex(Db)

class BaseModel extends visibilityPlugin(Model) {
    static get idColumn() {
        return PRIMARY_KEY
    }
}

module.exports = { Knex, Db, BaseModel }