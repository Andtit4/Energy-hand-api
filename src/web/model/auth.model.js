const { connect } = require("../config/db");

export default auth = function (email, pass, result) {
  connect.query(
    "SELECT * FROM utilisateur WHERE email = ?, AND password = ?",
    [email, pass],
    function (err, res) {
      if (err) {
        console.log("[-] An error occurred : " + err);
        result(err, null);
      } else {
        console.log("[+] Success : ", res[0]);
        if (res[0] == undefined) {
          console.log("first");
          // res[0] = "notnoc";
          res[0] = {
            error: "Email ou mot de passe incorrect",
          };
          console.log("[-] Not  user");
          result(err, res, null);
        } else {
          result(err, res, null);
        }
      }
    }
  );
};
