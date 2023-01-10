import Router from "express";
import {
    createLike
} from "../controllers/likes.js";

const likeRoutes = Router();

likeRoutes.post("/createLike", createLike);

export { likeRoutes };

