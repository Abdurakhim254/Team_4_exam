import { connection } from "../database/index.js";
import { createAccessToken, verifyToken, id } from "../helpers/index.js";
import {
  otp,
  sendMail,
  hashPassword,
  comparePassword,
} from "../utils/index.js";
import {
  saveOtp,
  deleteOtp,
  findByOtp,
  findCustomerByEmailService,
  deleteCustomerByEmailService,
  activateCustomerAccountService,
} from "./index.js";

export const authRegisterService = async ({
  first_name,
  last_name,
  email,
  password,
  role,
  phone,
  date_of_birth,
}) => {
  try {
    if (role) {
      var data = {
        first_name,
        last_name,
        email,
        password,
        role,
        phone,
        date_of_birth,
      };
    } else {
      var data = {
        first_name,
        last_name,
        email,
        password,
        phone,
        date_of_birth,
      };
    }

    const result = await connection
      .select("*")
      .table("customer")
      .where({ email });

    if (!result || result.length >= 1) {
      return "Foydalanuvchi allaqachon ro'yxatdan o'tgan!";
    } else {
      data.password = await hashPassword(data.password);
      data.id = id;

      await connection("customer").insert(data);
      await sendMail(email, otp);
      await saveOtp(otp);

      return "Ro'yxatdan o'tdingiz.";
    }
  } catch (error) {
    return error;
  }
};

export const authLoginService = async ({ email, password }) => {
  try {
    const result = await connection
      .select("*")
      .table("customer")
      .where({ email })
      .returning("*");

    if (result.length >= 1) {
      const isequal = await comparePassword(password, result[0].password);

      if (isequal) {
        if (!result[0].is_active) {
          await connection
            .table("customer")
            .where({ email })
            .update({ is_active: true });

          const accessToken = await createAccessToken(email, result[0].role);
          delete result[0].password;

          return { result, accessToken };
        } else {
          return "Account statusi active!";
        }
      }
    } else {
      return "Ro'yxatdan o'tishingiz kerak";
    }
  } catch (error) {
    return error;
  }
};

export const authVerifyService = async ({ otp, email }) => {
  try {
    const result = await findCustomerByEmailService(email);

    if (result[0].is_active) {
      return "Akkountingiz statusi joyida.";
    } else {
      const otpData = await findByOtp(otp);
      if (otpData) {
        await deleteOtp(otp);
        await activateCustomerAccountService(email);

        return "Akkountingiz aktivlashtirildi";
      } else {
        return "Otp kodni xato kiritdingiz!";
      }
    }
  } catch (error) {
    return error;
  }
};

export const sendOtpService = async (email) => {
  try {
    await sendMail(email, otp);
    await saveOtp(otp);

    return "Email pochtangizga qarang!";
  } catch (error) {
    return error;
  }
};

export const profileService = async ([type, token]) => {
  try {
    if (!type == "Bearer" || !token) return "Unauthorization";

    const email = await verifyToken(token);
    const result = await findCustomerByEmailService(email);

    return result;
  } catch (error) {
    return error;
  }
};

export const refreshTokenService = async ([type, token]) => {
  try {
    if (!type == "Bearer" || !token) return "Unauthorization";

    const email = await verifyToken(token);
    const data = await findCustomerByEmailService(email);

    const refReshtoken = token;
    const role = data[0].role;

    const accessToken = createAccessToken(email, role);

    return { accessToken, refReshtoken };
  } catch (error) {
    return error;
  }
};

export const logOutService = async ([type, token]) => {
  try {
    if (!type == "Bearer" || !token) return "Unauthorization";

    const email = await verifyToken(token);
    const result = await deleteCustomerByEmailService(email);

    return result;
  } catch (error) {
    return error;
  }
};
