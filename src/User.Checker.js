const db = require('./DatabaseConfiguration/db')

module.exports.UserChecker = async (id, login, password) =>{
    const UserSearch = await db.query(`SELECT * FROM users WHERE id = $1 AND login = $2 AND password = $3;`,
    [id,login,password])
    return (UserSearch.rows.length === 1)
}