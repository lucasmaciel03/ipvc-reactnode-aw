import Router from "express";
import {
    createUser,
    getAllUsers,
    getAllAdmins,
    updateAdmin,
    login,
    deleteUser,
    allUsers,
} from "../controllers/users.js";

const userRoutes = Router();

userRoutes.post("/createUser", createUser);

userRoutes.get("/getAllUsers", getAllUsers);

userRoutes.get("/getAllAdmins", getAllAdmins);

userRoutes.put("/updateAdmin/:id", updateAdmin);

userRoutes.post("/auth", login);

userRoutes.delete("/deleteUser/:id", deleteUser);

userRoutes.get("/allUsers", allUsers);



export { userRoutes };