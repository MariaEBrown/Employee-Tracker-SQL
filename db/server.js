const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  // Your username
  user: "root",
  // Your password
  password: "Root09090",
  database: "organization"
});

console.log('Connected')

module.exports = connection;
