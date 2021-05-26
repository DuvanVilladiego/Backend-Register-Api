const express = require('express')
const router = express.Router()
const Board = require('../models/board')
const User = require('../models/user')
const Auth = require('../middleware/auth')

router.post('/saveTask', Auth, async (req, res) => {
    const user = await User.findById(req.user._id)

    if (!user) return res.status(401).send('User not autenticated')
    const board = new Board ({
        userId: user._id,
        name: req.body.name,
        description: req.body.description,
        status: "to-do",
    });
    const result = await board.save()
    return res.status(200).send({ result })
})

module.exports  = router;