const express = require('express')
    , router = express.Router()
    , userCtrl = require('../controllers/user')

router.get('/', userCtrl.getAllUsers)

router.get('/:id', userCtrl.getOneUser)

router.patch('/:id', userCtrl.updateOneUser)

router.delete('/:id', userCtrl.deleteOneUser)

module.exports = router