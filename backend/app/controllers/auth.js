const User = require('../models/User')
    , jwt = require('jsonwebtoken')
    , bcrypt = require('bcrypt')
    , dotenv = require('dotenv')

dotenv.config()

exports.signup = async (req, res, next) => {
    try {
        const pwd = await bcrypt.hash(req.body.password, 10)


        const user = await User.query().insertGraph({
            name: req.body.name,
            email: req.body.email,
            password: pwd,
            role: "user",
            picture: "https://placekitten.com/400/400",
            background: "http://placeimg.com/600/600/arch",
            registred: new Date().toUTCString(),
            lastLogin: new Date().toUTCString()
        })

        res.send("Utilisateur enregristré !")

    } catch (e) {
        return next(e)
    }
}

exports.login = async (req, res, next) => {
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
            User.query()
                .where('email', req.body.email)
                .patch({lastLogin: new Date().toUTCString()})
                
            res.status(200).json({
                user: user[0].email,
                token: jwt.sign(
                    {userId: user[0].email },
                    process.env.TOKEN_SECRET,
                    { expiresIn: '24h' }
                )
        })
        


        })
    } catch (e) {
        return next(e)
    }
}