const db = require('../DatabaseConfiguration/db')
const {UserChecker} = require('../User.Checker')
class UserController {
    async login(req, res) {
        try{
            const {login, password} = req.body
            const UserCheck = await db.query(`SELECT * FROM users WHERE login = $1 AND password = $2;`,
                [login,password])
            if(UserCheck.rows.length === 1) {
                res.status(200).json(UserCheck.rows)
            } else {
                res.status(404).json({message: "User not found or invalid arguments!"})
            }
        }catch (error){
            res.status(500).json({message:"Internal server error!"})
            console.error("login error: " + error)
        }
    }

}

module.exports = new UserController()