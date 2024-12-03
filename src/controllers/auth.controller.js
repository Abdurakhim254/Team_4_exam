import { logger } from "../utils/index.js";
import { statusCodes } from "../config/index.js";
import {
  authLoginService,
  authRegisterService,
  authVerifyService,
  getAllCustomersService,
  logOutService,
  profileService,
  refreshTokenService,
  sendOtpService,
} from "../services/index.js";

const ok = statusCodes.ok;
const not_found = statusCodes.not_found;
const medium = statusCodes.medium;
const bad = statusCodes.bad;
const created = statusCodes.created;

export const authObj = {
  registerCon: async function (req, res) {
    try {
      const {
        first_name,
        last_name,
        email,
        password,
        role,
        phone,
        date_of_birth,
      } = req.body;

      const result = await authRegisterService({
        first_name,
        last_name,
        email,
        password,
        role,
        phone,
        date_of_birth,
      });

      res.status(created).send(result);
    } catch (error) {
      logger.error(error);
      res.status(bad).send(error.message);
    }
  },

  loginCon: async function (req, res) {
    try {
      const { email, password } = req.body;
      const result = await authLoginService({ email, password });

      res.status(ok).send(result);
    } catch (error) {
      logger.error(error);
      res.status(bad).send(error.message);
    }
  },

  getAllCutomersCon: async function (req, res) {
    try {
      const result = await getAllCustomersService();

      res.status(ok).send(result);
    } catch (error) {
      logger.error(error);
      res.status(bad).send(error.message);
    }
  },

  profileCon: async function (req, res) {
    try {
      const [type, token] = req.headers.authorization.split(" ");
      const result = await profileService([type, token]);

      res.status(ok).send(result);
    } catch (error) {
      logger.error(error);
      res.status(bad).send(error.message);
    }
  },

  sendOtpCon: async function (req, res) {
    try {
      const { email } = req.body;
      const result = await sendOtpService(email);

      res.status(ok).send(result);
    } catch (error) {
      logger.error(error);
      res.status(bad).send(error.message);
    }
  },

  verifyCon: async function (req, res) {
    try {
      const { otp, email } = req.body;
      const result = await authVerifyService({ otp, email });

      res.status(ok).send(result);
    } catch (error) {
      logger.error(error);
      res.status(bad).send(error.message);
    }
  },

  logOutCon: async function (req, res) {
    try {
      const [type, token] = req.headers.authorization.split(" ");
      const result = await logOutService([type, token]);

      res.status(ok).send(result);
    } catch (error) {
      logger.error(error);
      res.status(bad).send(error.message);
    }
  },

  refreshTokenCon: async function (req, res) {
    try {
      const [type, token] = req.headers.authorization.split(" ");
      const result = await refreshTokenService([type, token]);

      res.status(ok).send(result);
    } catch (error) {
      logger.error(error);
      res.status(bad).send(error.message);
    }
  },
};
