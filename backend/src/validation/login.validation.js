import joi from "joi";

export const LoginValidate = joi.object({
  username: joi.string().min(1).max(10).required(),
  passwords: joi.string().min(1).max(10).required(),
});
