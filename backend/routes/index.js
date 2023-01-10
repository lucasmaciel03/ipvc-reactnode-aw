import Router from "express";
import { categoryRoutes } from "../routes/categories.js";
import { userRoutes } from "../routes/users.js";
import { filmRoutes } from "../routes/films.js";
import { likeRoutes } from "../routes/likes.js";

const routes = Router();

routes.use("/categories", categoryRoutes);

routes.use("/users", userRoutes);

routes.use("/films", filmRoutes);

routes.use("/likes", likeRoutes);


export { routes };