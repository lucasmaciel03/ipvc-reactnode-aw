import Router from "express";
import {
    createFilm,
    getAllFilmsWithCategoryName,
    deleteFilmById
} from "../controllers/films.js"

const filmRoutes = Router();

filmRoutes.post("/createFilm", createFilm);

filmRoutes.get("/getAllFilmsWithCategoryName", getAllFilmsWithCategoryName);

filmRoutes.delete("/deleteFilmById/:id", deleteFilmById);

export { filmRoutes };