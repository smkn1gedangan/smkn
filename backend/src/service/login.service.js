import bcrypt from "bcrypt";
import { mainValidate } from "../validation/mainValidate.js";
import { LoginValidate } from "../validation/login.validation.js";
import { Prisma } from "../config/prisma.js";
import ResponseError from "../error/ResponseError.js";
import jwt from "jsonwebtoken";
export const RegisterUser = async (req) => {
  const dataValid = mainValidate(LoginValidate, req);

  const password = await bcrypt.hash(dataValid.passwords, 10);
  return await Prisma.login.create({
    data: {
      username: dataValid.username,
      passwords: password,
    },
  });
};
export const Login = async (req, res) => {
  try {
    const dataValid = mainValidate(LoginValidate, req);
    const dataId = await Prisma.login.findUnique({
      where: {
        username: dataValid.username,
      },
    });
    if (!dataId) {
      throw new ResponseError(401, "username tidak ditemukan");
    }
    const comparingPass = await bcrypt.compare(
      dataValid.passwords,
      dataId.passwords
    );
    if (!comparingPass) {
      throw new ResponseError(401, "password salah");
    }
    const id = dataId.id;
    const username = dataId.username;
    const pass = dataId.passwords;
    const accessToken = jwt.sign(
      { id, username, pass },
      process.env.ACCESS_TOKEN,
      {
        expiresIn: "16h",
      }
    );

    res.cookie("accessToken", accessToken, {
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.json({ accessToken });
  } catch (error) {
    res.status(error.status | 500).json({ message: error.message });
  }
};
