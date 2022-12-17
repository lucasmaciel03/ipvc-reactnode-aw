import Router from "express";
import { categoryRoutes } from "../routes/categories.js";
import { userRoutes } from "../routes/users.js";

const routes = Router();

routes.use("/categories", categoryRoutes);

routes.use("/users", userRoutes);

export { routes };