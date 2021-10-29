const express = require('express')
    , router = express.Router()
    , userCtrl = require('../controllers/user')

router.get('/', userCtrl.getAllUsers)

router.get('/:id', userCtrl.getOneUser)

router.get('/:id/posts', userCtrl.getOneUserWithAllPosts)

router.get('/:id/comments', userCtrl.getOneUserWithAllComments)

router.get('/:id/reactions', userCtrl.getOneUserWithAllReactions)

router.get('/:id/history', userCtrl.getOneUserHistory)

router.patch('/:id', userCtrl.updateOneUser)

router.delete('/:id', userCtrl.deleteOneUser)

module.exports = router