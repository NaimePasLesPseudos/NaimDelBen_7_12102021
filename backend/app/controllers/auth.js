const { validationResult } = require('express-validator')

const User = require('../models/User')
    , jwt = require('jsonwebtoken')
    , bcrypt = require('bcrypt')
    , dotenv = require('dotenv')
    , date = new Date().toUTCString()

dotenv.config()

exports.signup = async (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    try {
        const checkEmail = User.query()
            .where('email', req.body.email)
            
        if ((await checkEmail).length > 0) {
            return res.status(400).json({message: "Email déjà utilisé"})
        }

        const pwd = await bcrypt.hash(req.body.password, 10)

        const user = await User.query().insertGraph({
            name: req.body.name,
            email: req.body.email,
            password: pwd,
            role: "user",
            picture: "https://placekitten.com/400/400",
            background: "http://placeimg.com/600/600/arch",
            registred: date,
            lastLogin: date
        })

        res.json("Utilisateur enregristré !")

    } catch (e) {
        return next(e)
    }
}

exports.login = async (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    try {
        const user = await User.query().where('email', req.body.email)
        

        if (user.length < 1) {
            return res.status(401).json({ error: "Mauvais e-mail !" })
        }

        const pwd = await User.query()
            .where('email', req.body.email)
            .select('password')
        
        bcrypt.compare(req.body.password, pwd[0].password).then(match => {
            if (!match) {
                return res.status(401).json({ error: "Mot de passe incorrect !" })
            }
            const lastLogin = User.query()
                .where('email', req.body.email)
                .patch({
                    lastLogin: date,
                })

            res.status(200).json({
                id: user[0].id,
                name: user[0].name,
                role: user[0].role,
                picture: user[0].picture,
                gender: user[0].gender,
                lastLogin: user[0].lastLogin,
                token: jwt.sign({ 
                    userId: user[0].id,
                    role: user[0].role
                    },
                    process.env.TOKEN_SECRET,
                    { expiresIn: '24h' }
                )
        })

        }) 
    } catch (e) {
        return next(e)
    }
}