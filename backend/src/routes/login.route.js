import express from "express";
import { LoginUserC, RegisterUserC } from "../controller/login.controller.js";

const route = express.Router();
route.post("/register", RegisterUserC);
route.post("/login", LoginUserC);
export default route