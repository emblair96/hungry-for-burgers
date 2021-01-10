const connection = require("./connection");

var orm = {
    selectAll: function(tableName, cb) {
        var queryStr = "SELECT * FROM ??";
        connection.query(queryStr, [tableName], function(err, result) {
            if (err) throw err;
            cb(result);
        }); 
    },
    insertOne: function(tableName, cols, vals, cb) {
        var queryStr = "INSERT INTO ?? (??) VALUES (?)"
        connection.query(queryStr, [tableName, cols, vals],  function(err, result) {
            if (err) throw err;
           cb(result);
        });
    },
    updateOne: function(tableName, newVal, idValue, cb) {
        var queryStr = "UPDATE ?? SET displayed = ? WHERE id = ?";
        connection.query(queryStr, [tableName, newVal, idValue], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
}

module.exports = orm;