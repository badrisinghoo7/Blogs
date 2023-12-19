const jwt = require("jsonwebtoken");
const HttpError = require("../models/errorModel");

const authMiddleware = async (req, res, next) => {
  const Authorization = req.headers.Authorization || req.headers.authorization;

  if(Authorization && Authorization.startsWith("Bearer")){
    const token = Authorization.split(" ")[1];
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      next();
    } catch (error) {
      return next(new HttpError("Authentication failed", 401));
    }
  }
};

module.exports = authMiddleware;
