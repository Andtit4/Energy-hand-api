require('dotenv').config();
const mysql = require('mysql');

var connect = mysql.createPool({
  host: process.env.DB_HOST || 'mysql-testdep.alwaysdata.net',
  user: process.env.BD_USER || 'testdep_connect',
  password: process.env.BD_PASSWORD || 'Motdep@sse2022',
  database: process.env.DB_NAME || 'testdep_noc',
  queueLimit: 50,
  waitForConnections: true,
  connectionLimit: 50000,
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