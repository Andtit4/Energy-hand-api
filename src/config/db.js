require('dotenv').config();
const mysql = require('mysql');

var connect = mysql.createPool({
  host: process.env.DB_HOST || 'mysql-prodb.alwaysdata.net',
  user: process.env.BD_USER || 'prodb',
  password: process.env.BD_PASSWORD || 'Motdep@sse2022',
  database: process.env.DB_NAME || 'prodb_noc',
  queueLimit: 50,
  waitForConnections: true,
  connectionLimit: 190,
  debug: false,
  multipleStatements: true,
});

/* var connect = mysql.createConnection({
  host: process.env.DB_HOST || 'mysql-testdep.alwaysdata.net',
  user: process.env.BD_USER || 'testdep_user',
  password: process.env.BD_PASSWORD || 'Motdep@sse2022',
  database: process.env.DB_NAME || 'testdep_noc', 
}); */

/* function verify() {
  connect.connect(function (err, conn) {
    if (err) return console.log("[-] AN error occurred :", JSON.stringify(err));
    else console.log("[+] Connected successfully ");
  });
} */

module.exports = {  connect: connect };