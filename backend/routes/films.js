import Router from "express";
import {
    createFilm,
} from "../controllers/films.js";

const filmRoutes = Router();

filmRoutes.post("/createFilm", createFilm);

export { filmRoutes };