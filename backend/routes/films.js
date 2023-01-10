import Router from "express";
import {
    createFilm,
    getAllFilmsWithCategoryName
} from "../controllers/films.js"

const filmRoutes = Router();

filmRoutes.post("/createFilm", createFilm);

filmRoutes.get("/getAllFilmsWithCategoryName", getAllFilmsWithCategoryName);

export { filmRoutes };