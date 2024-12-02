import { genSalt, hash } from "bcrypt";

export const hashPassword = async (password) => {
  try {
    const salt = await genSalt(10);
    const res = await hash(password, salt);
    return res;
  } catch (error) {
    return error.message;
  }
};
