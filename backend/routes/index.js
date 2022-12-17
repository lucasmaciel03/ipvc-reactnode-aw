import Router from "express";
import { categoryRoutes } from "../routes/categories.js";

const routes = Router();

routes.use("/categories", categoryRoutes);

export { routes };