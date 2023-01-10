import Router from "express";
import {
    createFilm,
    getAllFilms
} from "../controllers/films.js"

const filmRoutes = Router();

filmRoutes.post("/createFilm", createFilm);

filmRoutes.get("/getAllFilms", getAllFilms);

export { filmRoutes };