const mysql = require('mysql2');
    

const config = require('../config/config.json');
    

   // console.log(config.host);
    let connection = mysql.createConnection({
    host: config.host,
    user: config.user,
    port : 3305,
    database: config.database,
    password: config.password,
});

module.exports = connection.promise();