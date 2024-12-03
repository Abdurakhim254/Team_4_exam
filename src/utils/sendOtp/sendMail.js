import nodemailer from "nodemailer";
import { logger } from "../logger/logger.js";
import { email_info } from "../../config/index.js";

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email_info.user,
    pass: email_info.pass,
  },
});

export const sendMail = async (email, otp) => {
  try {
    transport.sendMail(
      {
        from: email_info.user,
        to: "nurmatovfirdavs96@gmail.com",
        subject: "OTP",
        text: `Sizning otp passwordingiz ${otp}`,
      },
      function (error, info) {
        if (error) {
          logger.error(error);
        } else {
          logger.silly(info);
        }
      }
    );
  } catch (error) {
    logger.error(error);
  }
};
