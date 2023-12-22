const Pool = require('pg').Pool
const pool = new Pool({
    user: "maxim",
    password: "100205",
    host: "localhost",
    port: 5432,
    database: "LK_company"

})

module.exports = pool