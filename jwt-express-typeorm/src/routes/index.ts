import { Router, Request, Response } from "express";
import auth from "./auth";
import user from "./user";
import superOrder from "./superOrder";

const routes = Router();

routes.use("/auth", auth);
routes.use("/user", user);
routes.use("/superOrder",superOrder);

export default routes;