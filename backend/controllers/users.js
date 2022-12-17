import { UserModel } from "../models/users.js";
import bcrypt from 'bcrypt';

// create new user after verify if username is already taken, verify if username is not null and verify is password have at least 8 characters and 1 capital letter, if user is created return the user and status 201
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

