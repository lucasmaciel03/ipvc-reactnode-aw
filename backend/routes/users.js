import Router from "express";
import {
    createUser,
    getAllUsers,
    getAllAdmins
} from "../controllers/users.js";

const userRoutes = Router();

userRoutes.post("/createUser", createUser);

userRoutes.get("/getAllUsers", getAllUsers);

userRoutes.get("/getAllAdmins", getAllAdmins);

export { userRoutes };