const jwt = require('jsonwebtoken');


class JwtAuth {

    generateAccessToken = (userId) => {
        return jwt.sign({ userId: userId }, process.env.TOKEN_SECRET, { expiresIn: '1h' });
    }

    authenticateToken = (req, res, next) => {
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
        if (token == null) return res.sendStatus(401)
        jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
            if (err){
                console.error(err)
                return res.sendStatus(403)
            }
            req.user = user
            next()
        })
    }

}

module.exports = new JwtAuth()