const mysql = require('mysql');

var connect = mysql.createConnection({
  host: "mysql-testdep.alwaysdata.net",
  user: "testdep_useroot",
  password: "Motdep@sse2022",
  database: "testdep_energy",
});

function verify() {
  connect.connect(function (err, conn) {
    if (err) return console.log("[-] AN error occurred :", JSON.stringify(err));
    else console.log("[+] Connected successfully ");
  });
}

module.exports = { verify: verify(), connect: connect };