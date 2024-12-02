import jwt from "jsonwebtoken";
import { logger } from "../utils/index.js";
import { jwt_info } from "../config/index.js";

export const authGuard = (req, res, next) => {
  try {
    const [type, token] = req?.headers?.authorization.split(" ");

    const secretkey = jwt_info.secretkey;

    if (!type == "Bearer" || !token) {
      res.status(404).send("Ro'yxatdan o'tishingiz kerak");
    }

    jwt.verify(token, secretkey, (error, decode) => {
      if (error) {
        return res.status(400).send(error).message;
      }
      req.user = decode;
    });

    next();
  } catch (error) {
    logger.error(error);
    next(error.message);
  }
};
