const express = require('express')
    , router = express.Router()
    , commentCtrl = require('../controllers/comments')

router.get('/', commentCtrl.getAllComments )

router.post('/', commentCtrl.createComment )

router.get('/:id', commentCtrl.getOneComment )

router.patch('/:id', commentCtrl.updateComment)

router.delete('/:id', commentCtrl.deleteOneComment)

// router.post('/:id/reaction', )

// router.delete('/:id/reaction', )

module.exports = router