const express = require('express')
    , helmet = require('helmet')
    , userRoutes = require('./routes/user')
    , authRoutes = require('./routes/auth')
    , postRoutes = require('./routes/posts')
    , commentRoutes = require('./routes/comments')
    // , reactionRoutes = require('./app/routes/reaction')
    // , auth = require('./app/middleware/auth')
    , path = require('path')
    , dotenv = require('dotenv')
    , app = express()
    , Knex = require('knex')
    , knexConfig = require('./config/knexfile')

dotenv.config()

// Heroku DB connection
const knex = Knex(knexConfig.default)

// Heroku connection test
knex.raw("SELECT 1")
    .then(() => {
        console.log("Heroku PostgreSQL connected !")
    })
    .catch((e) => {
        console.log('Heroku PostgreSQL not connected !')
        console.error(e)
    })

// Headers
app.use(helmet())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
    next()
})

// Misc
app.use(express.json())

// User Authentification
// app.use(auth.n)

// API's routes
app.use('/v1/users', userRoutes)
app.use('/v1/auth', authRoutes)
app.use('/v1/posts', postRoutes)
app.use('/v1/comments', commentRoutes)
// app.use('', reactionRoutes)

module.exports = app