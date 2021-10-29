const express = require('express')
    , router = express.Router()
    , postCtrl = require('../controllers/posts')

router.get('/', postCtrl.getAllPosts)

router.post('/', postCtrl.createPost)

router.get('/:id', postCtrl.getOnePost)

router.patch('/:id', postCtrl.updatePost)

router.delete('/:id', postCtrl.deleteOnePost)

// router.post('/:id/reaction', )

// router.delete('/:id/reaction', )

module.exports = router