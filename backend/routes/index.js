import Router from "express";
import { categoryRoutes } from "../routes/categories.js";
import { userRoutes } from "../routes/users.js";
import { filmRoutes } from "../routes/films.js";

const routes = Router();

routes.use("/categories", categoryRoutes);

routes.use("/users", userRoutes);

routes.use("/films", filmRoutes);

export { routes };