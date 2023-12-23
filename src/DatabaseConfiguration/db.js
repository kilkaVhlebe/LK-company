const Pool = require('pg').Pool
const pool = new Pool({
    user: "postgres",
    password: "100205",
    host: "localhost",
    port: 5432,
    database: "lk_company"

})

module.exports = pool