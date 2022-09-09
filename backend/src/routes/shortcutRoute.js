const express = require('express')
const shortcutController = require('../controllers/shortcutController')
const router = express.Router()

router.post('/generate', shortcutController.addShortcut)
router.get('/:shortcut', shortcutController.getShortcut)

module.exports = router