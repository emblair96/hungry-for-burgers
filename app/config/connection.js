const mysql = require("mysql");
require("dotenv").config();

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    var connection = mysql.createConnection({
        host: process.env.MYSQL_HOST,
        port: 3306,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PW,
        database: process.env.MYSQL_DB
    });
};

connection.connect(function(err) {
    if (err) {
        console.log(err.sqlMessage);
    };

    console.log("Successfully connected as id: ", connection.threadId);
});

module.exports = connection;

