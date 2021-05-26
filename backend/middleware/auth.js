const jwt = require("jsonwebtoken")

const auth = (req, res, next) =>{
    let jwtToken = req.header('Authorization')

    if (!jwtToken) return res.status(400).send('Authorization Denegate: token invalid')

    jwtToken = jwtToken.split(" ")[1]

    if (!jwtToken) return res.status(401).send('Authorization Denegate: token invalid')

    try {
        const payload = jwt.verify(jwtToken, 'secretJWT')
        req.user = payload;
        next();
    } catch (error) {
        return res.status(401).send('Authorization Denegate: token invalid')
    }
}

module.exports = auth;