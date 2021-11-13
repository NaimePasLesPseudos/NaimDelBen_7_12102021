const express = require('express')
    , router = express.Router()
    , auth = require('../middleware/auth')
    , reactCtrl = require('../controllers/reactions')

router.get('/', auth.z, reactCtrl.getReactionsPost)

router.post('/', auth.z, reactCtrl.addReactionPost)

router.delete('/', auth.z, reactCtrl.deleteReactionPost)

// router.post('/:id/reaction', )

// router.delete('/:id/reaction', )

module.exports = router