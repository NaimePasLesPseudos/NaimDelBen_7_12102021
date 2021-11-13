const express = require('express')
    , router = express.Router()
    , auth = require('../middleware/auth')
    , postCtrl = require('../controllers/posts')
    , { check } = require('express-validator')

router.get('/', auth.z, postCtrl.getAllPosts)

router.post(
        '/',
        auth.z,
        check('id').isNumeric(),
        check('title').isAscii(),
        check('content').isAscii(),
        postCtrl.createPost
    )

router.get(
        '/:id',
        auth.z,
        check('id').isNumeric(),
        postCtrl.getOnePost
    )

router.get(
        '/:user_id/post/:post_id',
        check('user_id').isNumeric(),
        check('post_id').isNumeric(),
        check(),
        auth.z,
        postCtrl.getOnePost
    )

router.patch(
        '/:id',
        auth.z,
        check('id').isNumeric(),
        check('title').isAscii(),
        check('content').isAscii(),
        postCtrl.updatePost
    )

router.delete(
        '/:id',
        auth.z,
        check('id').isNumeric(),
        postCtrl.deleteOnePost
    )

// router.post('/:id/reaction', )

// router.delete('/:id/reaction', )

module.exports = router