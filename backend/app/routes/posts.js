const express = require('express')
    , router = express.Router()
    , auth = require('../middleware/auth')
    , postCtrl = require('../controllers/posts')

router.get('/', auth.z, postCtrl.getAllPosts)

router.post('/', auth.z, postCtrl.createPost)

router.get('/:id', auth.z, postCtrl.getOnePost)

router.patch('/:id', auth.z, postCtrl.updatePost)

router.delete('/:id', auth.z, postCtrl.deleteOnePost)

// router.post('/:id/reaction', )

// router.delete('/:id/reaction', )

module.exports = router