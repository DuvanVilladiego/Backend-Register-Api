const express = require('express');
const router = express.Router();
const User = require('../models/user')
const bcrypt = require('bcrypt')

router.post('/registerUser', async (req, res) => {
    let user = await User.findOne({ email: req.body.email})
    if (user) return res.status(400).send('El correo ya se encuentra registrado')
    const hash = await bcrypt.hash(req.body.password, 10)
    const hash1 = await bcrypt.hash(req.body.confirm_pass,5)

    user = new User({
        name:req.body.name,
        email:req.body.email,
        password: hash,
        confirm_pass: hash1,
    })
    const result = await user.save();
    if (result) {
        const jwtToken = user.generateJWT()
        res.status(200).send({jwtToken})
    }else{
        return res.status(400).send('No se pudo registrar el usuario');
    }
})

module.exports = router;