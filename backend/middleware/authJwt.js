

const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {    
    const authToken = req.headers.authorization
    if (!authToken) {
        return res.status(401).json({
            message: "Token is missing"
        })
    }

    const [,Token] = authToken.split(" ")
    try {
        jwt.verify(Token, process.env.SECRET)

        return next()
    }catch (err) {
        return res.status(401).json({
            message: "Token invalid"
        })
    }

}

