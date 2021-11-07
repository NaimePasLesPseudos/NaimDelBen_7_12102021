const express = require('express')
    , helmet = require('helmet')
    , userRoutes = require('./routes/user')
    , authRoutes = require('./routes/auth')
    , postRoutes = require('./routes/posts')
    , commentRoutes = require('./routes/comments')
    , reactionRoutes = require('./routes/reactions')
    , auth = require('./middleware/auth')
    , path = require('path')
    , dotenv = require('dotenv')
    , app = express()
    , Knex = require('knex')
    , knexConfig = require('./config/knexfile')
    , cors = require('cors')

dotenv.config()

// Heroku DB connection
const knex = Knex(knexConfig.default)

// Heroku connection test
knex.raw("SELECT 1")
    .then(() => {
        console.log("Hello World - Heroku PostgreSQL connected !")
    })
    .catch((e) => {
        console.log('Heroku PostgreSQL not connected !')
        console.error(e)
    })

// Headers
app.use(cors())
app.use(helmet())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization, X-auth-Token')
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE, PATCH')
    next()
})

// Misc
app.use(express.json())

// User Authentification
app.use(auth.n)

// API's routes
app.use('/v1/users', userRoutes)
app.use('/v1/auth', authRoutes)
app.use('/v1/posts', postRoutes)
app.use('/v1/posts', commentRoutes)
app.use('/v1/reactions', reactionRoutes)

module.exports = app