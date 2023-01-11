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

// update user to admin if isAdmin = false, else update is Admin to true, return message user.name becomer a Admin and return user informations, if not found a user return 404 not found message
export const updateAdmin = async (req, res) => {
    const { id } = req.params;
    const user = await UserModel.findOne({
        where: {
            id
        }
    });
    if (user) {
        if (user.isAdmin === false) {
            await UserModel.update({
                isAdmin: true
            }, {
                where: {
                    id
                }
            });
            res.json(user.username + ' became a Admin');
        } else {
            await UserModel.update({
                isAdmin: false
            }, {
                where: {
                    id
                }
            });
            res.json(user.username + ' is not an Admin anymore');
        }
    } else {
        res.status(404).json('User not found');
    }
}

