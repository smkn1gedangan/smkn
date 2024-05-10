import express from "express";
import dotenv from "dotenv";
import { ErrorMiddleware } from "./middleware/ErrorMiddleware.js";
import routes from "./routes/mainRoute.js";
dotenv.config();

const app = express();
app.use(express.json())
app.use(ErrorMiddleware)
app.use(routes)
app.listen(process.env.PORT, () => {
  console.log(`server running in port ${process.env.PORT}`);
});
