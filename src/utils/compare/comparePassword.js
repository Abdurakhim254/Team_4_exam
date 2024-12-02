import { compare } from "bcrypt";

export const comparePassword = async (password, pass) => {
  try {
    const res = await compare(password, pass);

    return res;
  } catch (error) {
    return error.message;
  }
};
