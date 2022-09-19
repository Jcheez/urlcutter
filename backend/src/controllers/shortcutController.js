const Shortcut = require('../models/shortcut')

const addShortcut = async (req, res) => {
    const shortcut = req.body.shortcut
    const original = req.body.original

    const shortPresent = await Shortcut.findOne({shortcut: shortcut})

    if (shortPresent) {
        res.status(400).json({
            error: "Duplicated Shortcut found",
            status: 400
        })
    } else {
        Shortcut.create({
            shortcut: shortcut,
            original: original,
            numUsed: 0
        }).then(
            res.status(200).json({
                newlink: "localhost:4000/" + shortcut,
                status: 200
            })
        )
    }
}

const getShortcut = async (req, res) => {
    const shortcut = req.params.shortcut
    const Short = await Shortcut.findOne({shortcut: shortcut})

    if (Short && Short.numUsed < 3) {
        await Shortcut.findOneAndUpdate({
            shortcut:Short.shortcut,
            original:Short.original,
            numUsed: Short.numUsed + 1
        })
        res.status(200).json({
            redirect: Short.original,
            status: 200
        })
    } else if (Short && Short.numUsed >= 3) {
        res.status(400).json({
            redirect: "/expired",
            status: 400
        })
    } else {
        res.status(404).json({
            redirect: "/error",
            status: 404
        })
    }
}

module.exports = {
    addShortcut,
    getShortcut
}