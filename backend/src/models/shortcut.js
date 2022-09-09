const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ShortcutSchema = new Schema({
    shortcut: {
        type: String,
        required: true
    },

    original: {
        type: String,
        required: true
    }
})

const Shortcuts = mongoose.model('shortcuts', ShortcutSchema)

module.exports = Shortcuts