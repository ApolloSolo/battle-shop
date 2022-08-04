const jwt = require("jsonwebtoken");
const db = require("../connection/db");
require("dotenv").config();

const protected = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await db.query(
        "SELECT users.username, users.email FROM users WHERE users.username = $1",
        [decoded.data.username]
      );

      next();
    } catch (error) {
      console.log(error);
      res.json({error: error.message})
    }
  }
};

module.exports = protected;
