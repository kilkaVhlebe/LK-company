const db = require('../DatabaseConfiguration/db')
const auth = require('../auth/jwtAuth')

class UserController {
    async login(req, res) {
        try{
            const {login, password} = req.params
            const User = await db.query(`SELECT * FROM users WHERE login = $1 AND password = $2;`, [login,password])
            const token = auth.generateAccessToken(User.rows[0].id)
            User.rows.length === 1 ?
                res.status(200).json({user: User.rows, TOKEN: token}) :
                res.status(404).json({message: "User not found or invalid arguments!"})
        }catch (error){
            res.status(500).json({message:"Internal server error!"})
            console.error("login error: " + error)
        }
    }

}

module.exports = new UserController()