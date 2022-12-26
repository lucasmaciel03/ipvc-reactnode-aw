import Router from "express";
import {
    createUser,
    getAllUsers,
    getAllAdmins
} from "../controllers/users.js";
import { authRequired } from "../utils/jwt.js";


const userRoutes = Router();

userRoutes.post("/createUser", createUser);

userRoutes.get("/getAllUsers", authRequired, getAllUsers);

userRoutes.get("/getAllAdmins", authRequired, getAllAdmins);

export { userRoutes };