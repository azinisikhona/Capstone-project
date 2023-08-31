const {createPool} = require('mysql')
require('dotenv').config()
const connection = createPool({
    host: process.env.dbHost,
    database: process.env.dbName,
    user: process.env.dbUser,
    password: process.env.dbPwd
})
module.exports = connection