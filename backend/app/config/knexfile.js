const dotenv = require('dotenv')

dotenv.config()

module.exports = {
    default: {
        client: 'pg',
        connection: {
            connectionString: process.env.DB_URI,
            ssl: { rejectUnauthorized: false }
        },
        seachPath: ['knex', 'public'],
    }
}