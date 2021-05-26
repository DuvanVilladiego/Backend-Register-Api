const express = require("express");
const router = express.Router();

const User = require('../models/user')
const bcrypt = require('bcrypt')

router.post('/login', async (req, res) => {
    const user = await User.findOne({ email: req.body.email})
    if (!user) return res.status(400).send('Email or Password unmatch');
    const hash = await bcrypt.compare(req.body.password, user.password)
    if (!hash) return res.status(400).send('Email or Password unmatch')
    const hash1 = await bcrypt.compare(req.body.confirm_pass, user.confirm_pass)
    if (!hash1) return res.status(400).send('Email or Password unmatch')
    const jwtToken = user.generateJWT()
    return res.status(200).send({jwtToken})
})

module.exports = router;