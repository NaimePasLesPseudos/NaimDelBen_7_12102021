const express = require('express')
    , router = express.Router()
    , auth = require('../middleware/auth')
    , userCtrl = require('../controllers/user')
    , { check } = require('express-validator')

router.get('/', auth.z, userCtrl.getAllUsers)

router.get(
    '/:id', 
    auth.z,
    check('id').isNumeric(),
    userCtrl.getOneUser)

router.get(
    '/:id/posts', 
    auth.z, 
    check('id').isNumeric(),
    userCtrl.getOneUserWithAllPosts
    )

router.get(
    '/:id/post/:post_id', 
    auth.z, 
    check('id').isNumeric(),
    userCtrl.getOneUserWithOnePost
    )

router.get(
    '/:id/comments',
    auth.z, 
    check('id').isNumeric(),
    userCtrl.getOneUserWithAllComments
    )

router.get(
    '/:id/reactions',
    auth.z, 
    check('id').isNumeric(),
    userCtrl.getOneUserWithAllReactions
    )

router.get(
    '/:id/history',
    auth.z, 
    check('id').isNumeric(),
    userCtrl.getOneUserHistory
    )

router.patch(
    '/:id', 
    auth.z, 
    check('id').isNumeric(),
    check('name').isAscii().optional(),
    check('email').isEmail().optional(),
    check('role').isAlpha().optional(),
    check('bio').isAscii().optional(),
    check('mobile').isAscii().optional(),
    check('picture').isURL().optional(),
    check('background').isURL().optional(),
    check('gender').isAlpha().optional(),
    check('birthday').isAscii().optional(),
    userCtrl.updateOneUser
    )

router.delete(
    '/:id', 
    auth.z, 
    check('id').isNumeric(),
    userCtrl.deleteOneUser
    )

module.exports = router