const { check } = require('express-validator')

const express = require('express')
    , router = express.Router()
    , auth = require('../middleware/auth')
    , commentCtrl = require('../controllers/comments')

router.get(
        '/:id/comments/',
        check('id').isNumeric(),
        auth.z,
        commentCtrl.getAllComments
    )

router.post(
        '/:id/comments/',
        check('id').isNumeric(),
        check('content').isAscii(),
        auth.z,
        commentCtrl.createComment
    )

router.get(
        '/:id/comments/:commentId',
        check('id').isNumeric(),
        check('commentId').isNumeric(),
        auth.z,
        commentCtrl.getOneComment
    )

router.patch(
        '/:id/comments/:commentId',
        check('id').isNumeric(),
        check('commentId').isNumeric(),
        check('content').isAscii(),
        auth.z,
        commentCtrl.updateComment
    )

router.delete(
        '/comments/:id', 
        check('id').isNumeric(),
        auth.z, 
        commentCtrl.deleteOneComment
    )

// router.post('/:id/reaction', )

// router.delete('/:id/reaction', )

module.exports = router