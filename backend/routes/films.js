import Router from "express";
import {
    createFilm,
    getAllFilmsWithCategoryName,
    deleteFilmById,
    countFilms,
    getAllCategory
} from "../controllers/films.js"

const filmRoutes = Router();

filmRoutes.post("/createFilm", createFilm);

filmRoutes.get("/getAllFilmsWithCategoryName", getAllFilmsWithCategoryName);

filmRoutes.delete("/deleteFilmById/:id", deleteFilmById);

filmRoutes.get("/countFilms", countFilms);

filmRoutes.get("/getAllCategory", getAllCategory);

export { filmRoutes };