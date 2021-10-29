const User = require('../models/User')

exports.signup = async (req, res, next) => {
    try {
        const user = await User.query().insertGraph({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            role: "user",
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
        // const user = await User.query().where('email', req.body.email)
        const user = await User.query().where('email', req.body.email)

        if (user.length < 1) {
            return res.status(401).json({ error: "Mauvais e-mail !" })
        }

// TODO: rajouter jwt et la vérif du token
        const pwd = await User.query().where('password', req.body.password)

        if (pwd.length < 1) {
            return res.status(401).json({ error: "Mot de passe incorrect !" })
        }

        const succes = await User
            .query()
            .where('email', req.body.email)
            .patch({lastLogin: new Date().toUTCString()})
            
        res.json(user)
        console.log(user)
    } catch (e) {
        return next(e)
    }
}