const mysql = require('mysql');

const connection = 
    mysql.createConnection({
        host: 'localhost',
        user: 'root',
        senha: '',
        database: 'dbmusical'
    });

module.exports = connection;
    