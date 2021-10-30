const express = require('express')
    , router = express.Router()
    , auth = require('../middleware/auth')
    , commentCtrl = require('../controllers/comments')

router.get('/', auth.z, commentCtrl.getAllComments )

router.post('/', auth.z, commentCtrl.createComment )

router.get('/:id', auth.z, commentCtrl.getOneComment )

router.patch('/:id', auth.z, commentCtrl.updateComment)

router.delete('/:id', auth.z, commentCtrl.deleteOneComment)

// router.post('/:id/reaction', )

// router.delete('/:id/reaction', )

module.exports = router