const { check } = require('express-validator')

const express = require('express')
    , router = express.Router()
    , authCtrl = require('../controllers/auth')


router.post(
    '/signup',
    check('name').isAlphanumeric('fr-FR', { ignore: ' '}).isLength({ min: 1}),
    check('email').isEmail(),
    check('password').isLength({ min: 3 }),
    authCtrl.signup)

router.post(
    '/login', 
    check('email').isEmail(),
    check('password').isLength({ min: 3 }),
    authCtrl.login)

module.exports = router