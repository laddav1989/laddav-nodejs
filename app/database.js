
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "laddav-laravel"
});

con.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
module.exports = con;