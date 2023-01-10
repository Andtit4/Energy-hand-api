const mysql = require('mysql');

var connect = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "courrier",
});

function verify() {
  connect.connect(function (err, conn) {
    if (err) return console.log("[-] AN error occurred :", JSON.stringify(err));
    else console.log("[+] Connected successfully ");
  });
}

module.exports = { verify: verify(), connect: connect };