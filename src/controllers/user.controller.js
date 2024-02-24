const db = require('../DatabaseConfiguration/db')
const auth = require('../auth/jwtAuth')

class UserController {
    async login(req, res) {
        try{
            const {login, password} = req.params
            const User = await db.query(`SELECT * FROM users WHERE login = $1 AND password = $2;`, [login,password])
            const token = auth.generateAccessToken(User.rows[0].id)
            User.rows.length !== 0 ?
                res.status(200).json({user: User.rows, TOKEN: token}) :
                res.status(404).json({message: "User not found or invalid arguments!"})
        }catch (error){
            res.status(500).json({message:"Internal server error!"})
            console.error("login error: " + error)
        }
    }

    async getAll(req, res) {
        try{
            const Users = await db.query(`SELECT * FROM users;`)
            Users.rows.length !== 0 ?
                res.status(200).json(Users) :
                res.status(404).json({message: "Users not found!"})
        } catch (error) {
            res.status(500).json({message:"Internal server error!"})
            console.error("login error: " + error)
        }
    }

    async createUser(req, res) {
        try {
            const {login, password} = req.body
            const User = await db.query(`INSERT INTO users (login, password) VALUES ($1, $2);`,[login, password])
            User.rows.length !== 0 ?
                res.statusCode(200) :
                res.status(404).json({message: "User not found or invalid arguments!"})
        } catch (error) {
            res.status(500).json({message:"Internal server error!"})
            console.error("login error: " + error)
        }
    }

    async updateUser(req, res) {
        try{
            const {userId, login, password} = req.body
            const updatedUser = await db.query(`UPDATE users SET login = $1, password = $2 WHERE id = $3 RETURNING *;`,[login, password, userId])
            updatedUser.rows.length !== 0 ?
                res.status(200).json(updatedUser.rows) :
                res.status(404).json({message: "User not found or invalid arguments!"})
        } catch (error) {
            res.status(500).json({message:"Internal server error!"})
            console.error("login error: " + error)
        }
    }

    async deleteUser(req, res) {
        try{
            const {userId} = req.body
            const deletedUser = await db.query(`DELETE FROM users WHERE id = $1 RETURNING *;`,[userId])
            deletedUser.rows.length !== 0 ?
                res.statusCode(200) :
                res.status(404).json({message: "User not found or invalid arguments!"})
        } catch (error) {
            res.status(500).json({message:"Internal server error!"})
            console.error("login error: " + error)
        }
    }

}

module.exports = new UserController()