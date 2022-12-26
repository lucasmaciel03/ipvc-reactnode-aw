import { UserModel } from "../models/users.js";
import bcrypt from 'bcrypt';

// create new user
export const createUser = async (req, res) => {
    const { username, password } = req.body;
    const user = await UserModel.findOne({
        where: {
            username
        }
    });
    if (user) {
        res.json('Username already taken');
    }
    if (username === null) {
        res.json('Username cannot be null');
    }
    if (password.length < 8 || !password.match(/[A-Z]/)) {
        res.json('Password must have at least 8 characters and 1 capital letter');
    }
    if (!user && username !== null && password.length >= 8 && password.match(/[A-Z]/)) {
        const newUser = await UserModel.create({
            username,
            password: bcrypt.hashSync(password, 10)
        });
        res.status(201).json('User Created!' + newUser);
    }
}

// get all users who have isAdmin = 0 dont return the password and id
export const getAllUsers = async (req, res) => {
    const users = await UserModel.findAll({
        attributes: ['username', 'rentals'],
        where: {
            isAdmin: 0
        }
    });
    res.json(users);
}

// get all admins who have isAdmin = 1 dont return the password and id
export const getAllAdmins = async (req, res) => {
    const admins = await UserModel.findAll({
        attributes: ['username', 'rentals'],
        where: {
            isAdmin: 1
        }
    });
    res.json(admins);
}


