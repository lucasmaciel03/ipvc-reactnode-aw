import Router from "express";
import {
    createUser,
    getAllUsers,
    getAllAdmins,
    updateAdmin,
} from "../controllers/users.js";

const userRoutes = Router();

userRoutes.post("/createUser", createUser);

userRoutes.get("/getAllUsers", getAllUsers);

userRoutes.get("/getAllAdmins", getAllAdmins);

userRoutes.put("/updateAdmin/:id", updateAdmin);

export { userRoutes };