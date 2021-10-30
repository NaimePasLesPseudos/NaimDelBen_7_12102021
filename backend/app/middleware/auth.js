const jwt = require('jsonwebtoken')
    , dotenv = require('dotenv')


// Authentification de l'utilisateur
exports.n = async (req, res, next) => {
    req.userId = null;
    if (req.headers.authorization) {
        // Le client a envoyé un header avec un token ?
        const token = req.headers.authorization.split(' ')[1]
        try {
            // On vérifie le token et on récupère son payload
            const { userId } = jwt.verify(token, process.env.TOKEN_SECRET);
            req.userId = userId;
            console.log('authn : succes !')
        } catch (err) {
        }
    }
    next();
}

// Authorisation de l'utilisateur
exports.z = async (req, res, next) => {
    if (!req.userId) {
        return res.status(401).json({ error: '401: User is not authenticated' })
    }
    console.log('authz : succes !')
    next();
}