const express = require('express')
    , router = express.Router()
    , authCtrl = require('../controllers/auth')


router.post('/signup', authCtrl.signup)

router.post('/login', authCtrl.login)

module.exports = router