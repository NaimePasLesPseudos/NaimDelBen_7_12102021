const express = require('express')
    , router = express.Router()
    , auth = require('../middleware/auth')
    , userCtrl = require('../controllers/user')

router.get('/', auth.z, userCtrl.getAllUsers)

router.get('/:id', auth.z, userCtrl.getOneUser)

router.get('/:id/posts', auth.z, userCtrl.getOneUserWithAllPosts)

router.get('/:id/comments', auth.z, userCtrl.getOneUserWithAllComments)

router.get('/:id/reactions', auth.z, userCtrl.getOneUserWithAllReactions)

router.get('/:id/history', auth.z, userCtrl.getOneUserHistory)

router.patch('/:id', auth.z, userCtrl.updateOneUser)

router.delete('/:id', auth.z, userCtrl.deleteOneUser)

module.exports = router