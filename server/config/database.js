const mysql = require('mysql2');

require('dotenv').config();

const DB_CONNECTION = mysql.createPool({ 
    host:     process.env.DB_HOST,
    user:     process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

// DB_CONNECTION.connect(function (error) {
//     if (error) throw error;
//     console.log('Database Connected Successfully!!!');
// })

module.exports = DB_CONNECTION.promise();
