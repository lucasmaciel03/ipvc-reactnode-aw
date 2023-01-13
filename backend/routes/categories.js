import Router from "express";
import {
    getAllCategories,
    createCategory,
    deleteCategory,
    countCategories
} from "../controllers/categories.js";

const categoryRoutes = Router();

categoryRoutes.get("/getAllCategories", getAllCategories);

categoryRoutes.post("/createCategory", createCategory);

categoryRoutes.delete("/deleteCategory/:id", deleteCategory);

categoryRoutes.get("/countCategories", countCategories);

export { categoryRoutes };
