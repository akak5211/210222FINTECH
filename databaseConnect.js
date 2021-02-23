var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'dgu1234!',
  database : '210222finteche'
});
 
connection.connect();

connection.query('SELECT * FROM user;', function (error, results, fields) {
    console.log(results);
});
 
connection.end();
