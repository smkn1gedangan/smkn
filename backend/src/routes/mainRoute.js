import express from "express";

const routes = express.Router();
import loginRoute from "./login.route.js";
const router = [
  {
    path: "/",
    route: loginRoute,
  },
];

router.forEach(({ path, route }) => {
  routes.use(path, route);
});

export default routes;
