const jwt = require("jsonwebtoken");

const token = jwt.sign({ id: 1, name: "Amulya" }, "secretkey");
console.log(token);