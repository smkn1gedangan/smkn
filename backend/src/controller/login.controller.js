import { Login, RegisterUser } from "../service/login.service.js";

export const RegisterUserC = async (req, res, next) => {
  console.log(req.body);
  const data = await RegisterUser(req.body);
  try {
    res
      .status(200)
      .json({ message: "sukses register akun untuk login!", data: data });
  } catch (error) {
    res.status(error.status | 500).json({ message: error.message });
    next(error);
  }
};
export const LoginUserC = async (req, res, next) => {
  await Login(req.body, res);
};
