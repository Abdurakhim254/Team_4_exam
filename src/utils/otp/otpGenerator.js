import { generate } from "otp-generator";

export const otp = generate(8, {
  upperCaseAlphabets: true,
  lowerCaseAlphabets: true,
  specialChars: false,
});
